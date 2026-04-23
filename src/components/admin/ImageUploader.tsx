import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import func2url from '@/../func2url.json';

interface ImageUploaderProps {
  value: string;
  onChange: (url: string) => void;
  className?: string;
}

const ImageUploader = ({ value, onChange, className = '' }: ImageUploaderProps) => {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const uploadUrl = (func2url as Record<string, string>)['upload-image'];

  const handleFile = async (file: File) => {
    if (!file.type.startsWith('image/')) {
      setError('Выберите изображение');
      return;
    }
    if (file.size > 10 * 1024 * 1024) {
      setError('Файл слишком большой (максимум 10 МБ)');
      return;
    }

    setError('');
    setUploading(true);

    const reader = new FileReader();
    reader.onload = async (e) => {
      const base64 = (e.target?.result as string).split(',')[1];
      const res = await fetch(uploadUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          file: base64,
          fileName: file.name,
          contentType: file.type,
        }),
      });

      const data = await res.json();
      setUploading(false);

      if (data.url) {
        onChange(data.url);
      } else {
        setError('Ошибка загрузки. Попробуйте ещё раз.');
      }
    };
    reader.readAsDataURL(file);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) handleFile(file);
  };

  return (
    <div className={`space-y-2 ${className}`}>
      <div
        className="border-2 border-dashed border-muted-foreground/30 rounded-lg p-6 text-center cursor-pointer hover:border-primary/50 transition-colors"
        onClick={() => inputRef.current?.click()}
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
      >
        {value ? (
          <div className="relative">
            <img src={value} alt="preview" className="mx-auto max-h-48 object-contain rounded" />
            <p className="text-xs text-muted-foreground mt-2">Нажмите, чтобы заменить</p>
          </div>
        ) : uploading ? (
          <div className="flex flex-col items-center gap-2 text-muted-foreground">
            <Icon name="Loader2" size={32} className="animate-spin" />
            <p className="text-sm">Загружаю фото...</p>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-2 text-muted-foreground">
            <Icon name="Upload" size={32} />
            <p className="text-sm">Перетащите фото сюда или нажмите для выбора</p>
            <p className="text-xs">JPG, PNG, WEBP — до 10 МБ</p>
          </div>
        )}
      </div>

      {error && <p className="text-sm text-destructive">{error}</p>}

      {value && !uploading && (
        <Button
          type="button"
          variant="ghost"
          size="sm"
          className="text-destructive hover:text-destructive"
          onClick={() => onChange('')}
        >
          <Icon name="X" size={14} className="mr-1" />
          Удалить фото
        </Button>
      )}

      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) handleFile(file);
          e.target.value = '';
        }}
      />
    </div>
  );
};

export default ImageUploader;

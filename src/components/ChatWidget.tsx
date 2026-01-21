import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';

interface Message {
  id: string;
  text: string;
  timestamp: Date;
  from: 'user' | 'admin';
  userId: string;
}

interface Chat {
  userId: string;
  messages: Message[];
  lastMessage: Date;
}

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: 'Здравствуйте! Наш офис работает с понедельника по пятницу с 9:00 до 17:00. Чем могу помочь?', isBot: true }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [lastUserMessageTime, setLastUserMessageTime] = useState<number | null>(null);
  const [autoReplyShown, setAutoReplyShown] = useState(false);
  const [userId] = useState(() => {
    let id = localStorage.getItem('chat_user_id');
    if (!id) {
      id = 'user_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
      localStorage.setItem('chat_user_id', id);
    }
    return id;
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const chats = JSON.parse(localStorage.getItem('admin_chats') || '[]');
      const myChat = chats.find((chat: Chat) => chat.userId === userId);
      
      if (myChat && myChat.messages.length > 0) {
        const adminMessages = myChat.messages.filter((msg: Message) => msg.from === 'admin');
        
        adminMessages.forEach((adminMsg: Message) => {
          if (!messages.some(m => m.text === adminMsg.text && m.isBot)) {
            setMessages(prev => [...prev, { text: adminMsg.text, isBot: true }]);
            setAutoReplyShown(false);
          }
        });
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [userId, messages]);

  useEffect(() => {
    if (!lastUserMessageTime || autoReplyShown) return;

    const timeout = setTimeout(() => {
      const chats = JSON.parse(localStorage.getItem('admin_chats') || '[]');
      const myChat = chats.find((chat: Chat) => chat.userId === userId);
      
      if (myChat) {
        const adminMessages = myChat.messages.filter((msg: Message) => msg.from === 'admin');
        const lastAdminMsg = adminMessages[adminMessages.length - 1];
        const timeSinceLastUserMsg = Date.now() - lastUserMessageTime;
        
        if (!lastAdminMsg || new Date(lastAdminMsg.timestamp).getTime() < lastUserMessageTime) {
          if (timeSinceLastUserMsg >= 30000) {
            setMessages(prev => [...prev, {
              text: 'Спасибо за обращение! Мы свяжемся с вами в течение рабочего дня. Для более быстрой связи звоните по телефону: +8 (902) 145-49-42',
              isBot: true
            }]);
            setAutoReplyShown(true);
          }
        }
      }
    }, 30000);

    return () => clearTimeout(timeout);
  }, [lastUserMessageTime, autoReplyShown, userId]);

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const userMessage = { text: inputValue, isBot: false };
    setMessages([...messages, userMessage]);
    setInputValue('');

    const now = Date.now();
    setLastUserMessageTime(now);
    setAutoReplyShown(false);

    const newMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      timestamp: new Date(),
      from: 'user',
      userId: userId
    };

    const chats: Chat[] = JSON.parse(localStorage.getItem('admin_chats') || '[]');
    const existingChatIndex = chats.findIndex(chat => chat.userId === userId);

    if (existingChatIndex !== -1) {
      chats[existingChatIndex].messages.push(newMessage);
      chats[existingChatIndex].lastMessage = new Date();
    } else {
      if (chats.length >= 5000) {
        chats.sort((a, b) => new Date(b.lastMessage).getTime() - new Date(a.lastMessage).getTime());
        chats.pop();
      }
      chats.push({
        userId: userId,
        messages: [newMessage],
        lastMessage: new Date()
      });
    }

    localStorage.setItem('admin_chats', JSON.stringify(chats));

    const unreadCount = parseInt(localStorage.getItem('admin_unread_count') || '0');
    localStorage.setItem('admin_unread_count', (unreadCount + 1).toString());
    localStorage.setItem('admin_new_message', Date.now().toString());
  };

  return (
    <>
      {isOpen && (
        <Card className="fixed bottom-24 right-6 w-80 shadow-2xl z-50 overflow-hidden">
          <div className="bg-primary text-white p-4 flex justify-between items-center">
            <h3 className="font-bold">Чат поддержки</h3>
            <button onClick={() => setIsOpen(false)} className="hover:opacity-80">
              <Icon name="X" size={20} />
            </button>
          </div>
          <div className="h-80 overflow-y-auto p-4 bg-slate-50 space-y-3">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}>
                <div className={`max-w-[75%] p-3 rounded-lg ${msg.isBot ? 'bg-white text-slate-900' : 'bg-primary text-white'}`}>
                  {msg.text}
                </div>
              </div>
            ))}
          </div>
          <div className="p-4 bg-white border-t flex gap-2">
            <Input
              placeholder="Введите сообщение..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            />
            <Button onClick={handleSend} size="icon">
              <Icon name="Send" size={18} />
            </Button>
          </div>
        </Card>
      )}

      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-2xl z-50"
        size="icon"
      >
        <Icon name={isOpen ? 'X' : 'MessageCircle'} size={24} />
      </Button>
    </>
  );
};

export default ChatWidget;
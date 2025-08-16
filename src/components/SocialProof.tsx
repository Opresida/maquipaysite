import { useState, useEffect } from 'react';
    import { motion, AnimatePresence } from 'framer-motion';
    import { ShoppingCart } from 'lucide-react';

    const notifications = [
      { name: 'João P.', city: 'São Paulo, SP' },
      { name: 'Maria C.', city: 'Rio de Janeiro, RJ' },
      { name: 'Carlos S.', city: 'Belo Horizonte, MG' },
      { name: 'Ana L.', city: 'Salvador, BA' },
      { name: 'Pedro A.', city: 'Curitiba, PR' },
      { name: 'Sofia M.', city: 'Recife, PE' },
      { name: 'Lucas F.', city: 'Porto Alegre, RS' },
      { name: 'Beatriz R.', city: 'Fortaleza, CE' },
    ];

    const SocialProof = () => {
      const [currentNotification, setCurrentNotification] = useState<typeof notifications[0] | null>(null);

      useEffect(() => {
        const showRandomNotification = () => {
          const randomIndex = Math.floor(Math.random() * notifications.length);
          setCurrentNotification(notifications[randomIndex]);

          setTimeout(() => {
            setCurrentNotification(null);
          }, 5000); // Notification visible for 5 seconds
        };

        // Initial delay
        const initialTimeout = setTimeout(showRandomNotification, 7000);

        const interval = setInterval(() => {
          showRandomNotification();
        }, 12000); // New notification every 12 seconds

        return () => {
          clearTimeout(initialTimeout);
          clearInterval(interval);
        };
      }, []);

      return (
        <AnimatePresence>
          {currentNotification && (
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, x: -50, scale: 0.9 }}
              transition={{ type: 'spring', stiffness: 200, damping: 25 }}
              className="fixed bottom-6 left-6 z-50 bg-surface border border-primary/30 p-4 rounded-xl shadow-2xl flex items-center gap-4 max-w-sm"
            >
              <div className="bg-primary/20 text-primary p-2 rounded-full">
                <ShoppingCart size={24} />
              </div>
              <div>
                <p className="font-bold text-sm text-text-primary">{currentNotification.name}</p>
                <p className="text-xs text-text-secondary">de {currentNotification.city}</p>
                <p className="text-xs text-text-secondary mt-1">acabou de adquirir uma MaquiPAY!</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      );
    };

    export default SocialProof;

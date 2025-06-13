"use client";
import {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useState,
} from "react";
import "./toast.scss";
type ToastProps = {
  timeout?: number; // remove toast timeout to milisecound
};

type ToastMessage = { id: number; message: string; type?: "error" | "success" };
type ToastMessageDto = Omit<ToastMessage, "id">;

type ToastContextProps = {
  addToast: (payload: ToastMessageDto) => void;
  removeToast: (id?: number) => void;
  resetToast: () => void;
} | null;

const ToastContext = createContext<ToastContextProps>(null);

export const useToast = () => {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }

  return context;
};

export const ToastProvider: FC<PropsWithChildren<ToastProps>> = ({
  children,
  timeout = 3000, // 3 sec
}) => {
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const addToast = (payload: ToastMessageDto) => {
    setToasts((prev) => [
      ...prev,
      {
        id: Date.now(),
        message: payload.message,
        type: payload.type || "success",
      },
    ]);
    setTimeout(() => removeToast(), timeout);
  };

  const removeToast = (id?: number) => {
    setToasts((prev) =>
      id ? prev.filter((item) => item.id !== id) : prev.slice(1)
    );
  };
  const resetToast = () => {
    setToasts([]);
  };

  return (
    <ToastContext.Provider value={{ addToast, removeToast, resetToast }}>
      {children}
      <div id="toast-root">
        {toasts.map((toast) => (
          <div key={toast.id} className={`toast toast--${toast.type}`}>
            <p className="toast__message">{toast.message}</p>
            <button
              className="toast__button"
              onClick={() => removeToast(toast.id)}
            >
              ✖
            </button>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
};

"use client";
import {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useState,
} from "react";
import classNames from "classnames";
import "./toast.scss";

type ToastProps = {
  timeout?: number;
};

type ToastMessage = {
  id: number;
  message: string;
  type?: "error" | "success";
};

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
  timeout = 3000,
}) => {
  const [toasts, setToasts] = useState<ToastMessage[]>([]);
  const [fadingToasts, setFadingToasts] = useState<number[]>([]);

  const addToast = (payload: ToastMessageDto) => {
    const id = Date.now();
    const toast = {
      id,
      message: payload.message,
      type: payload.type || "success",
    };
    setToasts((prev) => [...prev, toast]);

    setTimeout(() => fadeOutToast(id), timeout);
  };

  const fadeOutToast = (id: number) => {
    setFadingToasts((prev) => [...prev, id]);
    setTimeout(() => removeToast(id), 300); // Match with animation duration
  };

  const removeToast = (id?: number) => {
    if (id) {
      setToasts((prev) => prev.filter((t) => t.id !== id));
      setFadingToasts((prev) => prev.filter((fid) => fid !== id));
    } else {
      const [first] = toasts;
      if (first) fadeOutToast(first.id);
    }
  };

  const resetToast = () => {
    setToasts([]);
    setFadingToasts([]);
  };

  return (
    <ToastContext.Provider value={{ addToast, removeToast, resetToast }}>
      {children}
      <div id="toast-root">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className={classNames("toast", `toast--${toast.type}`, {
              "toast--fade-out": fadingToasts.includes(toast.id),
            })}
          >
            <p className="toast__message">{toast.message}</p>
            <button
              className="toast__button"
              onClick={() => fadeOutToast(toast.id)}
            >
              ✖
            </button>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
};

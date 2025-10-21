"use client"

import { useToast } from "@/hooks/use-toast"
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/ui/toast"

// cast toast components to any to avoid @types/react mismatch in JSX
const ToastProviderAny = ToastProvider as any
const ToastAny = Toast as any
const ToastCloseAny = ToastClose as any
const ToastDescriptionAny = ToastDescription as any
const ToastTitleAny = ToastTitle as any
const ToastViewportAny = ToastViewport as any

export function Toaster() {
  const { toasts } = useToast()

  return (
    <ToastProviderAny>
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <ToastAny key={id} {...props}>
            <div className="grid gap-1">
              {title && <ToastTitleAny>{title}</ToastTitleAny>}
              {description && (
                <ToastDescriptionAny>{description}</ToastDescriptionAny>
              )}
            </div>
            {action}
            <ToastCloseAny />
          </ToastAny>
        )
      })}
      <ToastViewportAny />
    </ToastProviderAny>
  )
}

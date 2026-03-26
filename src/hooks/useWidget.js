import { useEffect } from 'react';

export function useWidgetUser(user) {
  useEffect(() => {
    if (user && window.__gfpWidget) {
      window.__gfpWidget.setUser({
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
        tenant: user.tenant
      });
    } else if (!user && window.__gfpWidget) {
      window.__gfpWidget.clearUser();
    }
  }, [user]);
}

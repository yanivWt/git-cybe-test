import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../../app/hooks'

export default function RequireAuth({ children }: { children?: React.ReactNode }){
    /**
     *  RequireAuth it's just for reusable, in case part of the pages require auth
     *  we can also navigate from DashboardLayout directly if needed
     * 
     *  TODO use cookie for accessToken insted of store
     */
    const user = useAppSelector(state => state.user)
    if(!user?.accessToken) return <Navigate to='/login' replace />
    return (
            <>{children}</>
        )
  }

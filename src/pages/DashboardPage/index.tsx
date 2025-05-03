import { Navigate } from 'react-router';
import { CommentsBlock } from '../../components/CommentsBlock/ui';
import { InputBlock } from '../../components/InputBlock/ui';
import { useMeQuery } from '../../features/Auth/api';
import './index.scss';
import { AUTH } from '../../shared/router/routes';
import { Loader } from '../../shared/ui/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../../features/User/model';
import { RootState } from '../../shared/store';

export const DashboardPage = () => {
  const hasToken = localStorage.getItem('token');
  const dispatch = useDispatch();
  const userSelector = useSelector((state: RootState) => state.user.user);

  const {
    data: user,
    isLoading,
    isError,
    isSuccess,
  } = useMeQuery(undefined, {
    skip: !hasToken,
  });

  if (!hasToken) {
    return <Navigate to={AUTH} />;
  }

  if (isLoading) {
    return <Loader />;
  }

  if (!user && isError && !isSuccess) {
    return <Navigate to={AUTH} />;
  }

  console.log(userSelector);

  if (!userSelector) dispatch(setUser(user?.data));

  return (
    <div className="dashboard-page">
      <CommentsBlock />
      <InputBlock />
    </div>
  );
};

import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';

import axios from '@src/shared/configs/axios';
import { VerifyEmail } from '@src/shared/types/api/auth';

export const getAuthVerifications = (param: VerifyEmail['param']) =>
  axios.get<VerifyEmail['res']>(`/auth/verifications/${param.email}`);

const useVerificationsQuery = (
  param: VerifyEmail['param'],
  options?: UseQueryOptions<AxiosResponse<VerifyEmail['res']>, unknown>,
) => useQuery(options?.queryKey ?? ['users/me'], () => getAuthVerifications(param), options);

export default useVerificationsQuery;

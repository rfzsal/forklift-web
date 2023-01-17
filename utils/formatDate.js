import { format } from 'date-fns';
import { id } from 'date-fns/locale';

const formatDate = (timestamp, formatString = 'dd MMMM yyyy') => {
  return format(timestamp, formatString, { locale: id });
};

export default formatDate;

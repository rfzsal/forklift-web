import Driver from 'layouts/Driver';
import CardPengecekan from 'views/driver/proses-pengecekan/CardPengecekan';

const ProsesPengecekan = () => {
  return (
    <div className="flex flex-wrap">
      <CardPengecekan />
    </div>
  );
};

ProsesPengecekan.layout = Driver;

export default ProsesPengecekan;

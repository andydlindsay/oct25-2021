import {useParams, useNavigate, useLocation} from 'react-router-dom';
import {useEffect} from 'react';

const Product = () => {
  const params = useParams();
  console.log(params);

  const location = useLocation();
  console.log(location);

  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate(-2);
    }, 3000);
  }, [navigate]);

  // useEffect(() => {
  //   axios.get(`/api/products/${params.id}`)
  //     .then((response) => {
  //       setProduct(response.data);
  //     });
  // }, [params.id]);

  return (
    <div>
      <h2>Just one product #{params.id}</h2>
    </div>
  );
};

export default Product;

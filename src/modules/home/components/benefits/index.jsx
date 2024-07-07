import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck, faDollarSign, faHeadphones, faCreditCard } from '@fortawesome/free-solid-svg-icons';

const benefits = [
  {
    icon: faTruck,
    title: 'Free Shipping',
    text: 'Free delivery for all orders',
  },
  {
    icon: faDollarSign,
    title: 'Money Guarantee',
    text: '30 days money back',
  },
  {
    icon: faHeadphones,
    title: '24/7 Support',
    text: 'Friendly 24/7 support',
  },
  {
    icon: faCreditCard,
    title: 'Secure Payment',
    text: 'All cards accepted',
  },
];

const Benefits = () => {
  return (
    <div className="boxSmall flex lg:flex-row flex-col gap-[85px] py-[50px]">
      {benefits.map((benefit, index) => (
        <div key={index} className="flex items-center h-12 gap-5">
          <FontAwesomeIcon icon={benefit.icon} className="text-[#5C6AC4]" style={{ width: '40px', height: '40px' }} />
          <div className="ml-2">
            <h4 className="lg:text-lg font-bold whitespace-nowrap">{benefit.title}</h4>
            <p className="lg:text-base text-gray whitespace-nowrap">{benefit.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Benefits;


<div className="flex justify-center items-center h-screen">
      <Benefits />
    </div>
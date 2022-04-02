import React from 'react';
import Button from '../components/Button';
import Card from '../components/Card';
import CustomerCard from '../components/CustomerCard';
import LabelText from '../components/LabelText';
import Layout from '../components/layout/Layout';
import SplitSection from '../components/SplitSection';
import StatsBox from '../components/StatsBox';
import customerData from '../data/customer-data';
import SvgCharts from '../svg/SvgCharts';
import HeroImage from "../images/HeroImage.png"; 
import flexible from "../images/flexible.png"; 
import policy from "../images/policy.png"; 
import network from "../images/network.png"; 


const Index = () => (
  <Layout>
       <SplitSection
     
      primarySlot={<img src={HeroImage} alt = "Boat"   className="image-Hero" />
              }
      secondarySlot={<div> 
        <h1 className="text-3xl lg:text-5xl font-semibold leading-none">
        Are  you looking to Grow Your Amazon Business?
        </h1>
        <h1 className="text-xl lg:text-2xl mt-6 font-light">
        Out-of-stock products are lost sales. Logistika One covers the whole process of inventory management for you so your products are always available, while minimizing inventory carrying cos</h1>
        </div>
}
    /> 

    <section id="features" className="py-20 lg:pb-40 lg:pt-48">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl lg:text-5xl font-semibold">My services</h2>
        <div className="flex flex-col sm:flex-row sm:-mx-3 mt-12">
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Audit of the current supply chain </p>
              <p className="mt-4">
              Identifying current bottlenecks of the supply chain and creating a new strategy to meet your goals.  
              </p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Restock planning</p>
              <p className="mt-4">
              A customized restock plan including seasonality of a product, running promotions or deals.  
              </p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Sales forecasting</p>
              <p className="mt-4">
              Creating a sales forecast based on your historic shipment information. 
              </p>
            </Card>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row sm:-mx-3 mt-12">
        <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Sourcing of new forwarders and 3PLs</p>
              <p className="mt-4">
              Providing different options of a reliable warehouses/  forwarders to help you with your business.  
              </p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Analysis of the account and tips for IPI score increase</p>
              <p className="mt-4">
              Review of the account and current listings and providing guidance on how IPI score can be increased.   
              </p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Sourcing of new forwarders and 3PLs</p>
              <p className="mt-4">
              Providing different options of a reliable warehouses/  forwarders to help you with your business.  
              </p>
            </Card>
          </div> 

        </div>
        
      </div>
    </section>
    <div className="container mx-auto text-center"> 
    <h2 className="text-3xl lg:text-5xl font-semibold">Advantages of stock management by Logistika One vs. by a software:</h2>
    </div>
    <SplitSection
      id="services"
      primarySlot={
        <div className="lg:pr-32 xl:pr-48">
          <h3 className="text-3xl font-semibold leading-tight">Flexible inventory plan</h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
          Stock planning must be flexible and easy adjustable. You need take into account many factors such as seasonality of a product, delays at the port or at the factory, peak season sales, prime day, etc... There are many things that can change along the way and my mission is to find a problem at an early stage and minimize the risks. 
          </p>
        </div>
      }
      secondarySlot={<img src={flexible} alt = "Whatever"  class="right" />}
    />
    <SplitSection
      reverseOrder
      primarySlot={
        <div className="lg:pl-32 xl:pl-48">
          <h3 className="text-3xl font-semibold leading-tight">
          It's more than just stock management
          </h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
          Normally if you use a software for stock planning, you still need to be fully involved in communication processes  with forwarders/factories. I want to take care of this part of the business and create trusting relationships with forwarders and factories so your shipments are always in priority.
          </p>
        </div>
      }
      secondarySlot={<img src={policy} alt = "Whatever"  class="right" />}
    />
    <SplitSection
      primarySlot={
        <div className="lg:pr-32 xl:pr-48">
          <h3 className="text-3xl font-semibold leading-tight">
          Amazon Policy
          </h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
          Amazon always changes its policy. As you know, right now many sellers are facing stock limits – which does not allow them to send big shipments straight to Amazon. My task would be to create a drip feeding plan for your goods and help you to increase your stock limits. 
          </p>
        </div>
      }
      secondarySlot={<img src={network} alt = "Whatever"  class="right" />}
     
    />

    
    <section id="testimonials" className="py-20 lg:py-40">
      <div className="container mx-auto">
        <LabelText className="mb-8 text-gray-600 text-center">About me</LabelText>
        
       <p className="mt-8 text-xl font-light leading-relaxed">
    
       My name is Lidia Faustova. I am originally from Russian and currently leave in Barcelona, Spain. I came to Barcelona to study Supply Chain and Revenue management and later have been working in Amazon oriented start-ups as a Logistics Planner. 
       Amazon is much more complicated than a usual supply chain as it has their own rules that cannot be taught in any university.  
       Now I have been in Amazon business for more than 3 years and I learned a lot about best practices for Amazon optimization. 
       I have been managing different types of products from a very light small sized products to an oversized ones that cannot be managed by FBA, 
       from skincare and fitness to a household category. This experience taught me that every product is different and it is very important to 
       take in account all peculiarities of a product before creating an inventory strategy.  I also have an experience in launching new markets on Amazon.
       </p>
        </div>
      
    </section>

  </Layout>
);

export default Index;

import React from 'react'

const Button = (props) => {
  return (
    <div>
        <button className='px-6 border-2 border-brightColor text-brightColor hover:bg-brightColor hover:text-white transition-all rounded-full'>
        {props.title}
        </button>
    </div>
  )
}

// function redirectToWhatsApp(itemLink, itemName) {
//   const phoneNumber = '+254XXXXXXXXX'; // Replace with the seller's WhatsApp number (with country code)
//   const message = encodeURIComponent(`Hello! I am interested in buying the item: ${itemName} from your website. Here is the link: ${itemLink}`);
//   const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;
//   window.open(whatsappURL, '_blank');
// }

export default Button

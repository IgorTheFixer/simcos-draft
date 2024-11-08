import Script from 'next/script';

const SmartButton = () => {
  return (
    <Script id="storefront-sdk" strategy="afterInteractive">
      {`!function(e,t,r,n){var o,c,s;o=e.document,c=t.children[0],s=o.createElement("script"),e.StorefrontSDKObject="StorefrontSDK",e[e.StorefrontSDKObject]={executeCommand:function(t,r){e[e.StorefrontSDKObject].buffer.push([t,r])},buffer:[]},s.async=1,s.src="https://web-apps.cdn4dd.com/webapps/sdk-storefront/latest/sdk.js",t.insertBefore(s,c)}(window,document.head);
      StorefrontSDK.executeCommand('renderFloatingButton', 
        { 
          businessId: 171605, 
          businessSlug: 'Simcos', 
          floatingBar: true,
          position: 'bottom',
          buttonAlignment: 'center',
          backgroundColor: 'transparent', 
          buttonBackgroundColor: '#EF370D',
          buttonTextColor: '#ffffff',
          borderColor: 'transparent',
          buttonText: 'Order Online',
          buttonRadius: '10px',
          showModal: {
            button: {
              style: {
                borderRadius: '10px'            
              },
            },
          }
      });
      `}
    </Script>
  );
};

export default SmartButton;

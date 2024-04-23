/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
// @ts-check
/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  mySidebar: [
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        'Getting Started/Quick Start',
        'Getting Started/How to WSL',
      ],
    },
    {
      type: 'category',
      label: 'API',
      items: ['API/output', 'API/connectManual'],
    },
    {
      type: 'category',
      label: 'Supported Devices',
      items: [
        'Supported Devices/Buzzer',
        'Supported Devices/Servo',
        {
          type: 'category',
          label: 'Led',
          items: ['Supported Devices/Led/Led'],
        },        
        {
          type: 'category',
          label: 'Sensor',
          items: ['Supported Devices/Sensor/Collision Sensor','Supported Devices/Sensor/Hall Effect Sensor','Supported Devices/Sensor/Button','Supported Devices/Sensor/PIR Motion Sensor','Supported Devices/Sensor/Photo Interrupter Sensor','Supported Devices/Sensor/Digital Tilt Sensor'],
        },
      ],
    },
    'Types/Types',
    {
      type: 'category',
      label: 'Contributor',
      items: ['Contributor/Contributor Guidelines'],  
    },
    {
      type: 'category',
      label: 'Contact',
      items: ['Contact/Contact us'],
    },
  ],
};


module.exports = sidebars;

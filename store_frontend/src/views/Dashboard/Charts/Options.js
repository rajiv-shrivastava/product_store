import React from 'react'
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';

const options = {
      tooltips: {
        enabled: false,
        custom: CustomTooltips
      },
      maintainAspectRatio: false
}

export {
	options
}
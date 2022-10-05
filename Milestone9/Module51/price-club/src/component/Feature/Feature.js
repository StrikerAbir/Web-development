import { CheckCircleIcon } from '@heroicons/react/24/solid';
import React from 'react';

const Feature = ({feature}) => {
    return (
      <div className="flex items-center">
        <CheckCircleIcon className="h-6 w-6" />
        <p className="ml-3 ">{feature}</p>
      </div>
    );
};

export default Feature;
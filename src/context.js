import React from 'react';

const HelloContext = React.createContext();
<HelloContext.Provider
        value={ {date: new Date()} }>
          
</HelloContext.Provider>

export default HelloContext;
import React from 'react'

const Education = ({person}) => {

    return (
        <div className="flex flex-col flex-1 text-xl">
          <div className="text-4xl font-bold">Education</div>
          <div className="mt-7 text-blue-400">2019</div>
          <div className="mt-3 text-2xl">
            Gachon University <br />
            <span className="text-xl">{person.major}</span>
          </div>
        </div>
      );
}

export default Education
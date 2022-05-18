import React from 'react'
import Card from './shared/Card'
import {useState} from 'react';
function FeedBack() {
  return (
    <div>
        <Card>
            <div className="num-display">10</div>
            <div className="text-display">This is the FeedBack</div>             
        </Card>
    </div>
  )
}

export default FeedBack
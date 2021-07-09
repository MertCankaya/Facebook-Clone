import React from 'react'
import Story from './Story'
import "./StoryReel.css"

function StoryReel() {
    return (
        <div className="storyReel">
            <Story
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgUjmXY7ZXAWB4aQyhYN3BSoE7hUu7BZBQf6C7BY_wa1cvty2g7CIRwiU5ucq1vCr96rs&usqp=CAU"
                profileSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVLyDTPxV7_cnqgrNYeuUb1ZonTokvHbr26A&usqp=CAU"
                title="Mark Zuckerberg"
            />
            <Story
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTih5QuE40NrDD0EM_kU27_4OEjxBTkUzPmt-L05lq8ygpDAazMP8I2mfHtghx2m220nU&usqp=CAU"
                profileSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1o4sqho9DHBAp65M1Lycrph5c373AspuCRQ&usqp=CAU"
                title="Elon Musk"
            />
            <Story
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJSqnpUHu7EgRhoQ8TWZttuf1B9UCrHqI2O84BSbNEFidOCnPt29SuXu2iKGLbQ1L2gG4&usqp=CAU"
                profileSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9pH76SROc6e0qYMF-_yNgUlsn7xALu5o49wZlsNduRGLlatNUYlBvjijeYnMb4-jefDw&usqp=CAU"
                title="Jeff Bezos"
            />
            <Story
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuhV1LCwafrshljL-VzXO-UCHD1Y2zh3EtxocfC8KyFInKQtvBM7HU-92VifFok3opy1U&usqp=CAU"
                profileSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt1OsBQFDo6_bCAcs7x7HHpusET5Ztr2wlzBoSIIfPhitveJQL7EBsBL3BLSRMvRB8XFQ&usqp=CAU"
                title="Barack Obama"
            />
            <Story
                image="https://iso.500px.com/wp-content/uploads/2016/03/stock-photo-142984111.jpg"
                profileSrc="https://pbs.twimg.com/profile_images/988775660163252226/XpgonN0X_400x400.jpg"
                title="Bill Gates"
            />
        </div>
    )
}

export default StoryReel

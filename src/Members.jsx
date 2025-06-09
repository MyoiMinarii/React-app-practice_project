import React, { useState, useRef } from "react";

function Card({ profile_pic, name, age, position }) {
  return (
    <div className="card">
      <div className="card-image">
        <img src={profile_pic} alt="Profile_Picture" />
      </div>
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Position: {position}</p>
    </div>
  );
}

function Input_display() {
  const nameRef = useRef();
  let [name, setName] = useState("Nothing");

  //handles the button click event
  function button_handler() {
    const name = nameRef.current.value;
    setName(name);
  }

  return (
    <div className="input-display">
      <h1>Add new Member</h1>
      <input type="text" placeholder="Enter a Name" ref={nameRef} />

      <button onClick={button_handler}>Update Name</button>

      <h2>Your current name is: {name}</h2>
    </div>
  );
}

function createCard(profile_pic, name, age, position) {
  return (
    <div className="card">
      <div className="card-image">
        <img src={profile_pic} alt="Profile_Picture" />
      </div>
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Position: {position}</p>
    </div>
  );
}

function Members() {
  return (
    <div className="members">
      <h1>TWICE MEMBERS</h1>

      <p>Here are the members of the popular K-pop group TWICE:</p>

      <ul className="members-list">
        <li>
          <Card
            profile_pic="https://preview.redd.it/twice-japan-5th-album-dive-nayeon-jeongyeon-and-momo-teaser-v0-j4bzqr75xwxc1.jpg?width=1080&crop=smart&auto=webp&s=1280b0c13bd25dce3654bcd969dd91269575ec7e"
            name="Nayeon"
            age={27}
            position="Lead Vocalist"
          />
        </li>
        <li>
          <Card
            profile_pic="https://i.redd.it/twice-japan-5th-album-dive-nayeon-jeongyeon-and-momo-teaser-v0-me5vnr75xwxc1.jpg?width=1638&format=pjpg&auto=webp&s=e845aff80601d73e337d82120f252bc4fbc8edfd"
            name="Jeongyeon"
            age={26}
            position="Lead Vocalist"
          />
        </li>
        <li>
          <Card
            profile_pic="https://i.redd.it/twice-japan-5th-album-dive-nayeon-jeongyeon-and-momo-teaser-v0-y8pi2585xwxc1.jpg?width=1638&format=pjpg&auto=webp&s=bfde42ff5592821087328b5d2296affbae9482a5"
            name="Momo"
            age={26}
            position="Main Dancer"
          />
        </li>
        <li>
          <Card
            profile_pic="https://pbs.twimg.com/media/GMsp4rDWkAAU_1C.jpg:large"
            name="Sana"
            age={26}
            position="Lead Dancer, Sub Vocalist"
          />
        </li>
        <li>
          <Card
            profile_pic="https://preview.redd.it/twice-japan-5th-album-dive-sana-jihyo-and-mina-teaser-images-v0-m9f566bv14yc1.jpg?width=640&crop=smart&auto=webp&s=5c690699e8295caad3d045560943cbdf0fa86f99"
            name="Jihyo"
            age={26}
            position="Main Vocalist, Leader"
          />
        </li>
        <li>
          <Card
            profile_pic="https://preview.redd.it/twice-japan-5th-album-dive-sana-jihyo-and-mina-teaser-images-v0-sni0t6bv14yc1.jpg?width=640&crop=smart&auto=webp&s=1cc0414db6fc6220bd32b81fe49ba05e298e090d"
            name="Mina"
            age={26}
            position="Main Dancer, Sub Vocalist"
          />
        </li>
        <li>
          <Card
            profile_pic="https://i.redd.it/twice-japan-5th-album-dive-teaser-images-dahyun-chaeyoung-v0-ztz598mr6byc1.jpg?width=1638&format=pjpg&auto=webp&s=6767a7ce2535a70d0bce8d26e4c3530bb6db42f8"
            name="Dahyun"
            age={25}
            position="Lead Rapper, Sub Vocalist"
          />
        </li>
        <li>
          <Card
            profile_pic="https://preview.redd.it/twice-japan-5th-album-dive-teaser-images-dahyun-chaeyoung-v0-q5tt99mr6byc1.jpg?width=640&crop=smart&auto=webp&s=fbeeeb0005a793b05bcba8a7893170f595225a2a"
            name="Chaeyoung"
            age={24}
            position="Main Rapper, Sub Vocalist"
          />
        </li>
        <li>
          <Card
            profile_pic="https://preview.redd.it/twice-japan-5th-album-dive-teaser-images-dahyun-chaeyoung-v0-9ywmk8mr6byc1.jpg?width=640&crop=smart&auto=webp&s=515846d34a2789cc39f2bc6a870ab427451b8c76"
            name="Tzuyu"
            age={24}
            position="Lead Dancer, Sub Rapper, Visual"
          />
        </li>
      </ul>

      <Input_display />
    </div>
  );
}

export default Members;

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

function Input_display() {}

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
  const [members, setMembers] = useState([
    {
      id: 1,
      profile_pic:
        "https://preview.redd.it/twice-japan-5th-album-dive-nayeon-jeongyeon-and-momo-teaser-v0-j4bzqr75xwxc1.jpg?width=1080&crop=smart&auto=webp&s=1280b0c13bd25dce3654bcd969dd91269575ec7e",
      name: "Nayeon",
      age: 27,
      position: "Lead Vocalist",
    },
    {
      id: 2,
      profile_pic:
        "https://i.redd.it/twice-japan-5th-album-dive-nayeon-jeongyeon-and-momo-teaser-v0-me5vnr75xwxc1.jpg?width=1638&format=pjpg&auto=webp&s=e845aff80601d73e337d82120f252bc4fbc8edfd",
      name: "Jeongyeon",
      age: 26,
      position: "Lead Vocalist",
    },
    {
      id: 3,
      profile_pic:
        "https://i.redd.it/twice-japan-5th-album-dive-nayeon-jeongyeon-and-momo-teaser-v0-y8pi2585xwxc1.jpg?width=1638&format=pjpg&auto=webp&s=bfde42ff5592821087328b5d2296affbae9482a5",
      name: "Momo",
      age: 26,
      position: "Main Dancer",
    },
    {
      id: 4,
      profile_pic: "https://pbs.twimg.com/media/GMsp4rDWkAAU_1C.jpg:large",
      name: "Sana",
      age: 26,
      position: "Vocalist",
    },
    {
      id: 5,
      profile_pic:
        "https://preview.redd.it/twice-japan-5th-album-dive-sana-jihyo-and-mina-teaser-images-v0-m9f566bv14yc1.jpg?width=640&crop=smart&auto=webp&s=5c690699e8295caad3d045560943cbdf0fa86f99",
      name: "Jihyo",
      age: 27,
      position: "Leader, Main Vocalist",
    },
    {
      id: 6,
      profile_pic:
        "https://preview.redd.it/twice-japan-5th-album-dive-sana-jihyo-and-mina-teaser-images-v0-sni0t6bv14yc1.jpg?width=640&crop=smart&auto=webp&s=1cc0414db6fc6220bd32b81fe49ba05e298e090d",
      name: "Mina",
      age: 25,
      position: "Main Dancer, Sub Vocalist",
    },
    {
      id: 7,
      profile_pic:
        "https://preview.redd.it/240504-japan-twitter-update-twice-japan-5th-album-dive-2024-v0-z7od7gwk6byc1.jpg?width=640&crop=smart&auto=webp&s=46ffe39a2a4ff2be5589c1b1d3b5353ec609e177",
      name: "Dahyun",
      age: 25,
      position: "Lead Rapper, Sub Vocalist",
    },
    {
      id: 8,
      profile_pic:
        "https://preview.redd.it/twice-japan-5th-album-dive-teaser-images-dahyun-chaeyoung-v0-q5tt99mr6byc1.jpg?width=640&crop=smart&auto=webp&s=fbeeeb0005a793b05bcba8a7893170f595225a2a",
      name: "Chaeyoung",
      age: 24,
      position: "Main Rapper, Sub Vocalist",
    },
    {
      id: 9,
      profile_pic:
        "https://preview.redd.it/twice-japan-5th-album-dive-teaser-images-dahyun-chaeyoung-v0-9ywmk8mr6byc1.jpg?width=640&crop=smart&auto=webp&s=515846d34a2789cc39f2bc6a870ab427451b8c76",
      name: "Tzuyu",
      age: 23,
      position: "Lead Dancer, Sub Rapper, Visual, Maknae",
    },
  ]);

  const [newMember, setNewMember] = useState({
    profile_pic: "",
    name: "",
    age: "",
    position: "",
  });

  function handdleChange(e) {
    const { name, value } = e.target;
    setNewMember((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleAddMember() {
    if (!newMember.name) return;

    const memberToAdd = {
      ...newMember,
      id: Date.now(),
      age: parseInt(newMember.age),
    };

    setMembers((prev) => [...prev, memberToAdd]); // adds to the bottom of the list
    setNewMember({ name: "", age: "", position: "", profile_pic: "" }); // reset
  }

  return (
    <main>
      <div className="members">
        <h1>TWICE MEMBERS</h1>

        <p>Here are the members of the popular K-pop group TWICE:</p>
        <div className="members-list">
          {members.map((member) => (
            <Card
              key={member.id}
              profile_pic={member.profile_pic}
              name={member.name}
              age={member.age}
              position={member.position}
            />
          ))}
        </div>
        <Input_display />
      </div>

      <div className="input-display">
        <h2>Add a New Member</h2>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={newMember.name}
          onChange={handdleChange}
        />

        <input
          type="number"
          name="age"
          placeholder="Age"
          value={newMember.age}
          onChange={handdleChange}
        />

        <input
          type="text"
          name="position"
          placeholder="Position"
          value={newMember.position}
          onChange={handdleChange}
        />

        <input
          type="text"
          name="profile_pic"
          placeholder="Profile Picture URL"
          value={newMember.profile_pic}
          onChange={handdleChange}
        />

        <button onClick={handleAddMember}>Add Member</button>
      </div>
    </main>
  );
}

export default Members;

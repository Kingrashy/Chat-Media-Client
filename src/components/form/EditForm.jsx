import React, { useEffect, useRef, useState } from "react";
import { StyledFormIMage } from "../../styles/components/form/styled";
import { PlaceholderImage } from "../../assets";
import { useSelector } from "react-redux";
import { getUser } from "../../helper/fetch";
import { FormControl, FormLabel, Input } from "@mui/joy";
import { Button, ClipLoader } from "../../lib";
import { UpdateProfile } from "../../helper/post";

const EditForm = () => {
  const auth = useSelector((state) => state.CAuth);
  const [data, setData] = useState({
    userProfile: "",
    // username: "",
    // name: "",
    userId: auth._id,
  });
  console.log("user:", data);
  const imgRef = useRef();
  const [photo, setPhoto] = useState("");
  const [user, setUser] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  console.log(photo);
  useEffect(() => {
    const getuser = async () => {
      const data = await getUser(auth);
      setUser(data);
    };
    getuser();
  }, []);

  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        // The reader.result will contain the data URL of the file
        const dataURL = reader.result;
        setPhoto(dataURL);
        setData({ ...data, userProfile: dataURL });
      };

      reader.readAsDataURL(file);
    }
  };

  async function Save() {
    setIsLoading(true);
    await UpdateProfile(data);
    setIsLoading(false);
  }

  return (
    <div className="flex flex-col p-[1rem] items-center justify-center">
      {photo ? (
        <StyledFormIMage
          src={photo}
          className="rounded-full cursor-pointer"
          onClick={() => imgRef.current.click()}
        />
      ) : (
        <StyledFormIMage
          src={user?.userProfile?.url || PlaceholderImage}
          className="rounded-full cursor-pointer"
          onClick={() => imgRef.current.click()}
        />
      )}
      <input
        type="file"
        ref={imgRef}
        className="hidden"
        onChange={handleImageChange}
      />
      <div className="flex flex-col w-full gap-[1rem] mt-2">
        {/* <FormControl>
          <FormLabel>Name</FormLabel>
          <Input
            value={data.name}
            onChange={(e) => setData({ ...data, name: e.target.value })}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Username</FormLabel>
          <Input
            value={data.username}
            onChange={(e) => setData({ ...data, username: e.target.value })}
          />
        </FormControl> */}
        <Button
          onClick={Save}
          text={isLoading ? <ClipLoader /> : "Save"}
          secondary
        />
      </div>
    </div>
  );
};

export default EditForm;

import { useState } from "react";
import styled from "styled-components";

const TagBox = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  height: 56px;
  padding: 0px;
  border: none;
  border-radius: 10px;
  background-color: #f3f4f6;
`;

const TagItem = styled.div`
  width: 86px;
  height: 48px;
  position: relative;
  top: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 5px;
  padding: 5px;
  background-color: #f9fafb;
  border-radius: 26px;
  color: #1f2937;
  font-size: 13px;
`;

const TagItemName = styled.div`
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    text-align: left;
    color: #1F2937'
`;

const Title = styled.p`
  font-size: 18px;
  font-weight: 700;
  line-height: 21.48px;
  text-align: left;
  color: #1f2937;
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 22px;
  height: 24px;
  margin-left: 5px;
  background-color: #9ca3af;
  border: none;
  border-radius: 50%;
  color: #ffffff;
`;

const TagInput = styled.input`
  border: none;
  cursor: text;
  background-color: #f3f4f6;
`;

const Tag = () => {
  const [tagItem, setTagItem] = useState("");
  const [tagList, setTagList] = useState([]);

  const onKeyPress = (e) => {
    if (e.target.value.length !== 0 && e.key === "Enter") {
      submitTagItem();
    }
  };

  const submitTagItem = () => {
    let updatedTagList = [...tagList];
    updatedTagList.push(tagItem);
    setTagList(updatedTagList);
    setTagItem("");
  };

  const deleteTagItem = (e) => {
    const deleteTagItem = e.target.parentElement.firstChild.innerText;
    const filteredTagList = tagList.filter(
      (tagItem) => tagItem !== deleteTagItem
    );
    setTagList(filteredTagList);
  };

  return (
    <div>
      <Title>태그</Title>
      <TagBox>
        <TagInput
          type="text"
          placeholder="태그를 입력해주세요"
          tabIndex={2}
          onChange={(e) => setTagItem(e.target.value)}
          value={tagItem}
          onKeyDown={onKeyPress}
        />
        {tagList.map((tagItem, index) => {
          return (
            <TagItem key={index}>
              <TagItemName>{tagItem}</TagItemName>
              <Button onClick={deleteTagItem}>X</Button>
            </TagItem>
          );
        })}
      </TagBox>
    </div>
  );
};

export default Tag;

import Tag from "./Tag";
import React, {useContext} from "react";
import styled from "styled-components";
import {LocaleContext} from "../context/Locale";
import Link from "./Link";

const TagChild = styled.div`
	margin-left: 30px;
	animation: fadein 0.5s;
  p {
    margin: 0;
  }
`
const Wrapper = styled.div`
	margin-left: 15px;
`;
const CVItems = () => {
  const {dictionary} = useContext(LocaleContext)
  return (
    <Wrapper>
      <Tag
        name={dictionary.experience_title}
        closedTag
      >
        <TagChild>
          <p>{dictionary.experience_text_1}<Link link="https://wearepsh.com" text='PSh'/>{dictionary.experience_text_2}</p>
          <p>{dictionary.experience_text_3}</p>
          <p>{dictionary.experience_text_4} <Link link="https://nearpod.com/" text='Nearpod' target='_blank' rel="noopener noreferrer"/>. {dictionary.experience_text_5}<span role='img' aria-label='red heart'>❤️</span> {dictionary.experience_text_6}</p>
          <p>{dictionary.experience_text_7}</p>
          <p>{dictionary.experience_text_8}<Link link="https://distillery.com/" text='Distillery'/>
            {dictionary.experience_text_9}</p>
          <p>{dictionary.experience_text_10}<Link link="https://standardnotes.com/" text='Standard Notes'/>
            {dictionary.experience_text_11}</p>
          <p>{dictionary.experience_text_12}</p>
        </TagChild>
      </Tag>
      <Tag
        name={dictionary.education_title}
        closedTag
      >
        <TagChild>
          <p>{dictionary.education_text}</p>
          <p>{dictionary.education_text_1}</p>
        </TagChild>
      </Tag>
      <Tag
        name={dictionary.knowledge_title}
        closedTag
      >
        <TagChild>
          <p>
            {dictionary.knowledge_text}
          </p>
        </TagChild>
      </Tag>
      <Tag
        name={dictionary.interests_title}
        closedTag
      >
        <TagChild>
          <ul>
            <li>
              {dictionary.interests_text_3}
            </li>
            <li>
              {dictionary.interests_text} <Link text="Youtube Tech Talks" link="https://www.youtube.com/playlist?list=PLnaeZnXQ8nsmWRIVeKIeaPOac0gcONCqP"/>. {dictionary.interests_text_1}
            </li>
            <li>
              {dictionary.interests_text_4} <Link text="Codigo Facilito React Workshop" link="https://codigofacilito.com/cursos/taller-primera-app-react" />
            </li>
            <li>
              {dictionary.interests_text_2}
            </li>
          </ul>
        </TagChild>
      </Tag>
    </Wrapper>
  )
}

export default CVItems;
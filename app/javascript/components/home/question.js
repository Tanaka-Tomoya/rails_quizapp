import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom'
import Record from './record'

export default function Question(question,i) {
  return (
    <Item>
      <UserInfo>
        <Icon ></Icon>
        <UserAbout>
          <UserName>Test</UserName>
          <Date>2018/03/17</Date>
        </UserAbout>
      </UserInfo>
      <ArticleItem>
				<p>test</p>
				<Record />
			</ArticleItem>
    </Item>
  );
}
const Item = styled.div`
  width: 100%;
  height: 150px;
  border-bottom: 0.5px solid #AAAAAA;
  margin-top: 10px;
`
const UserInfo = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
`
const Icon = styled.img`
  height: 100%;
  width: 40px;
  height: 40px;
  marginLeft: 10px;
`
const UserAbout = styled.div`
  width: 85%
  height: 100%
  text-align: left
`
const UserName = styled.div`
  font-size: 30px;
  font-weight: 400;
  text-decoration: none;
  display: inline-block;
  color: black;
  margin-left: 5px;
`
const Date = styled.span`
  color: #808080;
  marginLeft: 5px;
`
const ArticleItem = styled.div`
  width: 100%;
  height: 70%;
  textAlign: left;
`
const ArticleTitle = styled.a`
  width: 100%;
  text-align: left;
  height: 35%;
  font-size: 25px;
  font-weight: 400;
  padding-left: 10px;
  text-decoration: none;
  display: inline block;
  color: black;
`

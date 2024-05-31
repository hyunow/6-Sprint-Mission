import { useEffect, useState } from 'react'
import LoginHeader from '../../components/HeaderForMember'
import HorizonLine from '../../components/HorizontalLine'
import { Link, useParams } from 'react-router-dom'
import arrowImg from './images/arrow.png'
import styled from 'styled-components'
import { getItemsDetail } from '../../api'

export const ItemDetailSection = styled.div`
  width: 1200px;
  height: 486px;
  display: flex;
  padding-top: 24px;
  gap: 24px;
`

export const ItemSummary = styled.div`
  display: flex;
  flex-direction: column;
  width: 690px;
  height: 486px;
`

export const ItemImage = styled.img`
  width: 486px;
  height: 486px;
  border-radius: 16px;
  border: solid;
`

export const ItemName = styled.p`
  font-size: 24px;
  font-weight: 600;
  line-height: 28.64px;
  text-align: left;
  color: #1f2937;
  padding: 20px 0;
`

export const ItemPrice = styled.p`
  font-size: 40px;
  font-weight: 600;
  line-height: 47.73px;
  text-align: left;
  color: #1f2937;
  margin: 0;
`

export const ItemDetailTitle = styled.p`
  font-size: 14px;
  font-weight: 500;
  line-height: 16.71px;
  text-align: left;
  color: #4b5563;
`

export const ItemDescription = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 22.4px;
  text-align: left;
  color: #1f2937;
  padding-bottom: 24px;
`

export const CommentSection = styled.div`
  width: 1200px;
`

export const CommentForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const CommentFormLabel = styled.label`
  font-size: 16px;
  font-weight: 600;
  line-height: 19.09px;
  text-align: left;
  color: #111827;
`

export const CommentFormInput = styled.textarea`
  width: 1200px;
  height: 104px;
  background-color: #f3f4f6;
  border: none;
`

export const CommentFormButton = styled.button`
  width: 74px;
  height: 42px;
  border-radius: 8px;
  background-color: #9ca3af;
  color: #ffffff;
  border: none;
`

export const LinkButton = styled.button`
  width: 240px;
  height: 48px;
  top: 418px;
  left: 480px;
  padding: 12px 71px;
  gap: 10px;
  border: none;
  border-radius: 40px;
  background-color: #3692ff;
  color: #ffffff;
`

export const ButtonSection = styled.div`
  position: relative;
`

export const ArrowImg = styled.img`
  position: absolute;
  top: 15px;
  left: 200px;
`

function ItemDetail({ id }) {
  const [item, setItem] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  const { itemId } = useParams()

  useEffect(() => {
    async function fetchItem() {
      if (!itemId) {
        setError('상품 아이디가 제공되지 않았어요')
        setIsLoading(false)
        return
      }
      setIsLoading(true)
      try {
        const data = await getItemsDetail(itemId)
        if (!data) {
          throw new Error('해당 상품의 데이터를 찾을 수 없습니다')
        }
        setItem(data)
      } catch (error) {
        setError(error.message)
      } finally {
        setIsLoading(false)
      }
    }
    fetchItem()
  }, [itemId])

  return (
    <>
      <LoginHeader />
      <ItemDetailSection>
        <ItemImage src={item.images[0]} alt="상품 이미지" />
        <ItemSummary>
          <ItemName>{item.name}</ItemName>
          <ItemPrice>{item.price.toLocaleString()}원</ItemPrice>
          <HorizonLine />
          <ItemDetailTitle>상품 소개</ItemDetailTitle>
          <ItemDescription>{item.description}</ItemDescription>

          <ItemDetailTitle>상품 태그</ItemDetailTitle>
          <p className="ItemTags">{item.tags}</p>
        </ItemSummary>
      </ItemDetailSection>
      <HorizonLine />
      <CommentSection>
        <CommentForm>
          <CommentFormLabel>문의하기</CommentFormLabel>
          <CommentFormInput
            className="commentFormInput"
            placeholder="개인정보를 공유 밎 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
          />
          <CommentFormButton>등록</CommentFormButton>
        </CommentForm>
      </CommentSection>
      <ButtonSection>
        <Link to="/products">
          <LinkButton>목록으로 돌아가기</LinkButton>
          <ArrowImg src={arrowImg} alt="화살표" />
        </Link>
      </ButtonSection>
    </>
  )
}

export default ItemDetail

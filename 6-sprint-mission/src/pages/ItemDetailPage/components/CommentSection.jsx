import { useEffect, useState } from 'react'
import { getItemComments } from '../../../api'
import Comment from './Comment'
import styles from '../styles/CommentSection.module.css'

function CommentSection({ productId }) {
  const limit = 3
  const [commentList, setCommentList] = useState(null)

  useEffect(() => {
    async function fetchComments() {
      const data = await getItemComments({ productId, limit })
      setCommentList(data.list)
    }

    fetchComments()
  }, [productId])

  return (
    <>
      <div className={styles.inputSection}>
        <p className={styles.sectionTitle}>문의하기</p>
        <input
          className={styles.input}
          placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
        />
        <button className={styles.button} type="submit">
          등록
        </button>
      </div>
      <div>
        {commentList?.map((id) => (
          <Comment id={id} key={`comment-item-${id}`} />
        ))}
      </div>
    </>
  )
}

export default CommentSection

import React, { useState } from "react";
import styled from "styled-components";
import { upLoadImg } from "../../api/imgUpload";
import { addProducts } from "../../api/firebase";
import PageTemplate from "../../components/PageTemplate";

function RegisterProduct(props) {
  const [product, setProduct] = useState({
    title: "",
    price: "",
    option: "",
    category: "",
  }); //모든 상품의 상태를 빈 문자열로 초기화
  const [file, setFile] = useState(null); //업로드 파일 초기화
  const [isLoading, setIsLoading] = useState(false); //업로드 상태 초기화(업로드시 true)
  const [success, setSuccess] = useState(null); //업로드 완료 상태
  const [error, setError] = useState(null);

  const onChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "file" && files && files[0]) {
      setFile(files[0]);
      console.log(files[0]);
    } else {
      setProduct((prevProduct) => ({ ...prevProduct, [name]: value }));
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault(); //리액트는 기본 이벤트를 없애는 기능이 없기 때문에e.preventDefault()를 항상 넣어줄 것
    setIsLoading(true);

    try {
      const url = await upLoadImg(file);
      await addProducts(product, url); // 파이어베이스 데이터 연동 스트립트 실행
      setSuccess("업로드가 완료되었습니다.");
      setTimeout(() => {
        setSuccess(null);
      }, 2000);

      setProduct({
        title: "",
        price: "",
        description: "",
        option: "",
        category: "",
      });

      setFile(null);
    } catch (error) {
      console.error(error);
      setError("업로드 실패");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <PageTemplate>
      <RegisterProductSection>
        <h2 style={{ marginBottom: 20 }}>상품 등록</h2>
        {success && <p className="resultText">{success}</p>}
        <RegitsterForm onSubmit={onSubmit} className="form-container">
          {/* 카테고리 */}
          <FormRow>
            <LeftColumn>
              <span>카테고리</span>
            </LeftColumn>
            <RightColumn>
              <InputArea>
                <input
                  type="text"
                  name="category"
                  placeholder="카테고리를 입력해주세요."
                  value={product.category}
                  onChange={onChange}
                />
              </InputArea>
            </RightColumn>
          </FormRow>

          {/* 상품이름 */}
          <FormRow>
            <LeftColumn>
              <span>상품명</span>
            </LeftColumn>
            <RightColumn>
              <InputArea>
                <input
                  type="text"
                  name="title"
                  placeholder="상품명을 입력해주세요."
                  value={product.title}
                  onChange={onChange}
                />
              </InputArea>
            </RightColumn>
          </FormRow>

          {/* 상품 가격 */}
          <FormRow>
            <LeftColumn>
              <span>상품 가격</span>
            </LeftColumn>
            <RightColumn>
              <InputArea>
                <input
                  type="text"
                  name="price"
                  placeholder="상품 가격을 입력해주세요."
                  value={product.price}
                  onChange={onChange}
                />
              </InputArea>
            </RightColumn>
          </FormRow>

          {/* 상품 옵션 */}
          <FormRow>
            <LeftColumn>
              <span>상품 옵션</span>
            </LeftColumn>
            <RightColumn>
              <InputArea>
                <input
                  type="text"
                  name="option"
                  placeholder="상품 옵션을 입력해주세요."
                  value={product.option}
                  onChange={onChange}
                />
              </InputArea>
            </RightColumn>
          </FormRow>

          {/* 상품 설명 */}
          <FormRow>
            <LeftColumn>
              <span>상품 설명</span>
            </LeftColumn>
            <RightColumn>
              <InputArea>
                <input
                  type="text"
                  name="decription"
                  placeholder="상품 설명을 입력해주세요."
                  value={product.description}
                  onChange={onChange}
                />
              </InputArea>
            </RightColumn>
          </FormRow>

          {/* 이미지 업로드 */}
          <FormRow>
            <LeftColumn>
              <span>상품 대표 이미지</span>
            </LeftColumn>
            <RightColumn>
              <InputArea>
                <div className="imgBox-inner">
                  <input
                    id="image"
                    type="file"
                    name="file"
                    accept="image/*"
                    style={{ display: "none" }}
                    onChange={onChange}
                  />
                  <label
                    htmlFor="image"
                    style={{
                      border: "1px solid #000",
                      padding: "2px 10px",
                      borderRadius: 8,
                      fontSize: 14,
                    }}
                  >
                    + 이미지 첨부
                  </label>
                </div>
                <p
                  style={{ marginLeft: 10, fontStyle: "italic", opacity: 0.8 }}
                >
                  image file name
                </p>
              </InputArea>
              <div className="thumbnail-img" style={{ marginTop: 20 }}>
                {file && (
                  <img
                    src={URL.createObjectURL(file)}
                    alt={product.title}
                    style={{ width: 200, height: 200 }}
                  />
                )}
              </div>
            </RightColumn>
          </FormRow>

          <SubmitButton disabled={isLoading}>
            {isLoading ? "업로드중" : "제품 등록하기"}
          </SubmitButton>
        </RegitsterForm>
      </RegisterProductSection>
    </PageTemplate>
  );
}

const RegisterProductSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const RegitsterForm = styled.form`
  border: 1px solid rgb(221, 221, 221);
  width: 900px;
  height: auto;
  padding: 20px;
`;

const FormRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  &:last-of-type {
    align-items: start;
  }
`;

const LeftColumn = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  width: 140px;
  height: 40px;
  padding-left: 10px;
  font-size: 15px;
  font-weight: 500;
  letter-spacing: -0.5px;
  background: rgb(239, 239, 239);
`;

const RightColumn = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  flex: 1 1 0%;
  &:last-of-type {
    flex-direction: column;
  }
`;

const InputArea = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 40px;
  background-color: #fff;
  input {
    width: 100%;
    height: 100%;
    border: 1px solid rgb(255, 255, 255);
    box-sizing: border-box;
    padding: 0 10px;
  }
  & > div {
    padding-left: 20px;
  }
`;

const SubmitButton = styled.button`
  margin-top: 50px;
  height: 50px;
  border-radius: 4px;
  background: #786262;
  border: none;
  color: white;
`;

export default RegisterProduct;

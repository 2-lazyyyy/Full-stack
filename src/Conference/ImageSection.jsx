import Img from '../Images/syllabus.png';
import styled from 'styled-components';
import React from 'react';
import { useSelector } from 'react-redux';

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 51vw;

  @media only screen and (min-width: 1024px) {
    height: 37.6vw;
  }
`;

const url = process.env.REACT_APP_NEWS_IMAGE;


const Pic1 = styled.div`
  background: url(${props => `${url}${props.img}`});
  background-size: cover;
  width: 100%;
  height: 100%;
  object-fit: cover;
  background-position: center center;
  border-radius: 32px;
`;

const Pic3 = styled.div`
  background-size: cover;
  width: 100%;
  height: 100%;
  object-fit: cover;
  background-position: center center;
  border-radius: 32px;
`;

// insert //props => props.img in Img

const Pic2 = styled.div`
  background: url(${Img});  
  background-size: cover;
  object-fit: cover;
  background-position: center center;
  border-radius: 32px;
  opacity: 0.7;
`;

const GroupContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const PortraitWrapper = styled.div`
  width: 49%;
  margin-bottom: 8%;
  @media only screen and (min-width: 768px) {
    margin-bottom: 4%;
  }
  .pic {
    width: 100%;
    height: 51vw;
    @media only screen and (min-width: 768px) {
      height: 24.1vw;
    }
    @media only screen and (min-width: 1024px) {
      height: 18.3vw;
    }
  }
`;


function ImageSection() {

  // const {data,loading,error} = useFetch('http://localhost:4000/confrence/1','GET');

  // if (loading) return <div>Loading...</div>;
  // if (error) return <div>Error: {error}</div>;
  // if (!data || !data.images || data.images.length === 0) return <div>No images found</div>;

  // const images = [
  //   {"img":"20240516171320_Americano.jpg","style":"landscape"},
  //   {"img":"20240516171320_Americano.jpg","style":"portrait"},
  //   {"img":"20240516171320_Americano.jpg","style":"portrait"},
  //   {"img":"20240516171320_Americano.jpg","style":"landscape"},
  //   {"img":"20240516171320_Americano.jpg","style":"portrait"},
  //   {"img":"20240516171320_Americano.jpg","style":"landscape"},
  //   {"img":"20240516171320_Americano.jpg","style":"portrait"},
  //   {"img":"20240516171320_Americano.jpg","style":"portrait"},
  //   {"img":"20240516171320_Americano.jpg","style":"portrait"}
  // ]

  const imgOne = useSelector((state) => state.data.value.images.landscape);
  const imgTwo = useSelector((state) => state.data.value.images.portrait);

  const landscapes =  imgOne;
  const portraits =  imgTwo;

  // const landscapes = useSelector((state) => state.data.value.images.landscape) || useSelector((state) => state.data.value.images.potrait) ;
  // const portraits = useSelector((state) => state.data.value.images.potrait) || images.filter(image => image.style === 'portrait');





  const groupedImages = [];
  let i = 0, j = 0;

  while (i < landscapes.length || j < portraits.length - 1 ) {
   
    const group = [
    ];
    if(i < landscapes.length) {
      group.push(landscapes[i]);
      i++;
    }

    if(j < portraits.length - 1) {
      group.push(portraits[j]);
      group.push(portraits[j + 1]);
      j += 2;
    }
    groupedImages.push(group);
    
    
  } 





  return (
    <div className="pt-5" id="image">
      {groupedImages.map((group, index) => (
        <div key={index} className='flex flex-col gap-[6px] md:gap-[15px]'>
          <Container>
           {(landscapes.length !== 0) ? <Pic1 img={group[0]} /> : <Pic3 />}
          </Container>
          <GroupContainer>
            {group.slice(1).map((image, idx) => (
              <PortraitWrapper key={idx}>
                {(portraits.length !== 0) ? <Pic2 img={image} className="pic" /> : <Pic3 />}
                
              </PortraitWrapper>
            ))}
          </GroupContainer>
        </div>
      ))}
    </div>
  );
};
  
  export default ImageSection;


  // 
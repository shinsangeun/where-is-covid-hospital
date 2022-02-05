/* global kakao */
import React, {useEffect} from "react";
// @ts-ignore
import styled from "styled-components";
import useSWR from "swr";
import fetcher from "../data/fetcher";
import axios from "axios";

const MapContents = styled.div`
  width: 80%;height: 100%;display:inline-block;
`;

declare global{
    interface Window{
        kakao: any;
    }
}

const Kakaomap = () => {
    useEffect(() => {
        const { kakao } = window;
        let container = document.getElementById("map");

        let options = {
            center: new window.kakao.maps.LatLng(35.85133, 127.734086),
            level: 5,
        };

        let map = new window.kakao.maps.Map(container, options);
        console.log("loading kakaomap");
    }, []);

    const AUTH_KEY = 'vcu9zQh21aHdqeduiEp7Gr9QacLNM98A/WMExEIpgNQJwRyMSvNgP7ZJU3Ybpy75bM4nycmf/nP6IaLI2sXPUA==';
    const {data, error} = useSWR(`http://apis.data.go.kr/B551182/rprtHospService/getRprtHospService?serviceKey=${AUTH_KEY}&pageNo=1&numOfRows=10`, fetcher)
    console.log("data==>", data);

    return (
        <MapContents className={"MapContents"}>
            <div style={{width: '100%', height: '700px', display: "block"}} className={"MapContents"} id="map"/>
        </MapContents>
    );
};

export default Kakaomap;

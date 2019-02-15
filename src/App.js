import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import routes from "./routes";
import {PropsRoute} from 'react-router-with-props';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { withRouter } from "react-router";
import _ from 'lodash';
import { Link as ScrollLink } from "react-scroll";

import Header from './components/Header/Header';

import parallaxLayer3 from './parallax-mountains-full.jpg';

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = { 
      yPos: 0,
    };  
  }

  // fauxBackground = React.createRef();
  backgroundMountains = React.createRef();
  foreground = React.createRef();
  frontForeground = React.createRef();
  
  componentDidMount(){
    setTimeout(function(){window.scroll(0,1);window.scroll(0,0);},50);
    setTimeout(this.handleScroll(),100);
    window.addEventListener("scroll", _.throttle(this.handleScroll.bind(this), 10));
    // window.addEventListener('scroll', this.handleScroll, true);

  }

  componentWillUnmount(){
    // window.removeEventListener('scroll', this.handleScroll, true);
    window.removeEventListener("scroll", _.throttle(this.handleScroll.bind(this), 10));
  }

  

  handleScroll = (e) => {
    let yPos = window.pageYOffset;
    this.setState(prevState => ({
      yPos: yPos
    }));
    // this.backgroundMountains.current.style.transform = 'translateY(-' + Math.round(yPos * 1.5) + 'px)';
    // this.foreground.current.style.transform = 'translateY(-' + Math.round(yPos * 1.8) + 'px)';
    // this.frontForeground.current.style.transform = 'translateY(-' + Math.round(yPos * 2.2) + 'px)';
  }
  
  
  render(){
  
    var backgroundMountainsStyle = {transform: 'translateY(-' + Math.round(this.state.yPos * 1.5) + 'px)'};
    var foregroundStyle = {transform: 'translateY(-' + Math.round(this.state.yPos * 1.8) + 'px)'};
    var frontForegroundStyle = {transform: 'translateY(-' + Math.round(this.state.yPos * 2.4) + 'px)'};
    
    
    return (
        <Route render={({ location }) => (
          <div className="App">
            <Header/>
            <section className="section-one parallax-container" >
              <div className="parallax-background" style={{ backgroundImage: 'url('+parallaxLayer3+')' }}></div>
              <div style={backgroundMountainsStyle} className="parallax-layer background-element">
                  <div className="bounding-box-wrapper">
                    <img src={parallaxLayer3}/>
                    <svg viewBox="0 0 1800 2400" preserveAspectRatio="xMinYMin meet">
                    <defs>
                      <clipPath clipPathUnits="objectBoundingBox"  transform="scale(0.00055555555,0.00041666666)" id="background-clip">
                        <path d="M800.000,430.000 C803.333,430.333 806.667,431.667 810.000,432.000 C818.591,444.664 843.921,462.843 843.000,465.000 C842.079,467.157 848.425,466.302 850.000,468.000 C853.879,467.423 856.528,468.860 860.000,468.000 C862.252,467.442 866.295,464.820 868.000,464.000 C872.040,462.057 879.873,462.746 884.000,462.000 C889.023,461.092 889.660,463.117 892.000,464.000 C902.592,467.997 928.103,461.593 934.000,460.000 C946.840,456.531 952.204,467.619 965.000,464.000 C971.921,462.043 977.396,457.407 984.000,455.000 C990.885,452.491 996.236,455.095 1003.000,453.000 C1013.313,449.805 1023.195,443.750 1034.000,441.000 C1037.198,440.186 1041.758,441.495 1044.000,442.000 C1048.999,441.667 1060.001,438.333 1065.000,438.000 C1067.382,434.333 1072.978,425.544 1078.000,425.000 C1081.609,422.802 1088.467,424.176 1093.000,423.000 C1101.243,420.861 1109.130,425.322 1119.000,423.000 C1126.312,421.280 1135.747,420.371 1144.000,418.000 C1155.331,414.745 1169.096,412.918 1182.000,410.000 C1191.669,407.814 1204.362,412.309 1214.000,410.000 C1220.069,408.546 1233.562,399.831 1238.000,401.000 C1238.820,401.216 1241.180,403.711 1242.000,404.000 C1252.083,407.560 1263.025,408.461 1271.000,414.000 C1274.237,416.249 1276.850,422.292 1280.000,424.000 C1282.000,424.000 1284.000,426.000 1286.000,426.000 C1290.511,428.144 1295.744,432.210 1300.000,435.000 C1303.333,435.667 1306.667,436.333 1310.000,437.000 C1312.666,439.666 1315.334,442.334 1318.000,445.000 C1322.318,447.924 1327.620,450.160 1332.000,453.000 C1341.455,459.131 1354.246,468.315 1358.000,470.000 C1361.754,471.685 1374.408,472.913 1384.000,475.000 C1385.188,471.682 1393.223,463.278 1396.000,462.000 C1400.717,459.829 1411.537,458.420 1416.000,456.000 C1428.222,449.373 1437.258,444.008 1452.000,440.000 C1462.758,437.075 1475.538,438.525 1485.000,436.000 C1496.235,433.001 1502.254,426.676 1512.000,423.000 C1523.227,418.765 1539.647,423.168 1552.000,420.000 C1556.427,418.865 1566.735,416.138 1574.000,418.000 C1583.835,420.521 1591.680,426.576 1600.000,430.000 C1605.689,432.342 1614.362,432.702 1620.000,434.000 C1628.666,434.000 1639.334,435.000 1648.000,435.000 C1672.525,441.077 1701.358,440.898 1726.000,447.000 C1738.665,447.333 1752.335,448.667 1765.000,449.000 C1776.240,451.805 1786.163,455.662 1800.000,456.000 C1799.725,1102.200 1800.000,1752.188 1800.000,2400.000 C1200.060,2400.000 599.940,2400.000 -0.000,2400.000 C-0.000,1736.400 -0.000,1072.600 -0.000,409.000 C1.460,408.146 2.867,407.188 4.000,406.000 C10.438,406.116 13.963,407.509 18.000,407.000 C19.730,406.782 24.671,405.215 28.000,406.000 C30.055,406.484 32.605,408.705 36.000,408.000 C41.732,406.809 48.741,402.888 54.000,401.000 C63.422,397.618 71.996,398.640 82.000,396.000 C92.345,393.270 95.885,386.492 108.000,387.000 C111.833,392.925 117.204,397.077 122.000,402.000 C125.333,402.667 128.667,403.333 132.000,404.000 C135.461,403.588 145.442,400.138 148.000,399.000 C157.825,394.627 160.052,393.040 170.000,389.000 C173.223,387.691 176.820,382.735 180.000,382.000 C183.653,381.155 187.003,385.504 192.000,384.000 C203.913,380.415 214.905,368.338 230.000,372.000 C241.911,374.890 253.556,379.211 264.000,383.000 C266.666,383.333 269.334,383.667 272.000,384.000 C273.333,385.666 274.667,387.334 276.000,389.000 C280.423,391.966 284.338,393.299 289.000,396.000 C290.830,397.061 293.711,399.114 296.000,400.000 C298.666,400.333 303.334,402.667 306.000,403.000 C316.097,406.642 320.739,410.331 331.000,415.000 C339.329,418.790 348.090,426.148 359.000,427.000 C362.087,423.455 385.311,416.727 393.000,416.000 C400.689,415.273 410.786,411.994 415.000,413.000 C420.506,414.314 424.712,419.280 430.000,419.000 C438.802,418.535 453.155,419.034 462.000,417.000 C468.900,415.413 470.551,411.392 476.000,410.000 C481.333,410.000 486.667,410.000 492.000,410.000 C498.423,408.372 502.350,406.278 511.000,406.000 C514.691,411.211 521.703,416.417 530.000,417.000 C537.097,412.016 545.064,415.236 552.000,412.000 C552.667,411.000 562.333,410.000 563.000,409.000 C568.195,406.474 584.477,400.054 592.000,402.000 C597.778,403.495 602.612,408.427 608.000,410.000 C617.253,412.702 628.638,408.431 636.000,407.000 C636.748,401.817 636.920,399.102 644.000,399.000 C646.845,400.895 654.613,400.251 658.000,399.000 C670.194,394.496 683.935,386.997 692.000,378.000 C710.741,377.814 713.952,386.227 726.000,391.000 C730.579,392.814 738.691,397.240 742.000,400.000 C745.489,402.910 752.786,411.498 755.000,411.000 C758.831,409.669 759.505,405.928 764.000,405.000 C765.267,407.196 767.743,412.667 770.000,414.000 C775.945,411.292 784.863,422.141 790.000,424.000 C794.154,425.503 796.435,420.216 799.000,426.000 C799.803,427.180 799.773,427.681 800.000,430.000 ZM-0.000,-0.000 L2.000,-0.000 L2.000,2.000 L-0.000,2.000 L-0.000,-0.000 Z"/>
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
              <div className="parallax-layer content">
                <h1>Parallax</h1>
              </div>
              <div style={foregroundStyle} className="parallax-layer foreground-element">
                  <div className="bounding-box-wrapper">
                    <img src={parallaxLayer3}/>
                    <svg viewBox="0 0 1800 2400" preserveAspectRatio="xMinYMin meet">
                    <defs>
                      <clipPath clipPathUnits="objectBoundingBox"  transform="scale(0.00055555555,0.00041666666)" id="foreground-clip">
                        <path d="M1800.000,596.400 C1800.000,1197.540 1800.000,1798.860 1800.000,2400.000 C1200.060,2400.000 599.940,2400.000 -0.000,2400.000 C-0.000,2003.040 -0.000,1605.960 -0.000,1209.000 C-0.000,1101.011 -0.000,992.989 -0.000,885.000 C-0.000,855.603 -0.000,826.197 -0.000,796.800 C-0.000,789.045 -1.982,767.330 0.900,762.300 C1.100,762.200 1.300,762.100 1.500,762.000 C3.923,761.938 4.448,762.317 5.700,763.200 C6.450,766.202 9.433,768.575 12.900,768.900 C16.102,766.040 21.473,762.475 26.700,762.000 C29.257,763.336 31.764,764.382 34.800,765.600 C36.550,764.509 36.868,762.657 38.400,761.400 C45.063,761.437 44.524,764.634 48.300,766.500 C51.177,767.922 55.581,766.086 57.300,765.600 C60.908,764.579 63.385,766.520 66.000,766.800 C71.290,762.736 79.539,762.037 85.200,758.100 C87.863,756.248 87.035,753.725 91.500,753.000 C95.147,752.407 112.881,753.059 114.900,750.000 C114.500,749.100 114.100,748.200 113.700,747.300 C114.942,744.925 140.201,741.473 144.600,741.900 C145.237,741.062 155.081,733.369 156.000,732.900 C160.105,731.829 164.094,732.852 167.700,732.300 C168.917,729.587 169.449,724.013 172.200,722.700 C180.588,720.479 182.087,729.243 186.600,731.700 C188.372,732.665 196.490,735.246 198.300,735.600 C200.400,735.700 202.500,735.800 204.600,735.900 C207.000,738.200 209.400,740.500 211.800,742.800 C213.695,741.779 215.152,741.419 217.800,740.700 C217.637,738.783 217.803,738.454 218.700,737.100 C220.059,736.620 221.736,735.728 223.500,736.500 C226.564,737.852 228.173,742.198 232.200,741.300 C232.056,728.661 238.512,724.144 242.700,715.800 C245.588,710.046 244.143,702.504 246.000,695.700 C247.022,691.955 249.847,692.329 252.000,690.000 C255.662,686.040 256.026,677.856 261.000,675.300 C264.000,674.900 267.000,674.500 270.000,674.100 C269.970,666.088 275.088,666.809 278.100,662.400 C279.862,659.821 284.820,651.867 285.300,649.200 C281.425,645.075 284.395,644.666 283.200,639.900 C282.625,637.605 279.569,633.415 280.500,630.300 C281.455,628.531 283.725,628.246 284.700,626.700 C284.900,625.300 285.100,623.900 285.300,622.500 C286.800,621.500 288.300,620.500 289.800,619.500 C294.984,614.231 299.813,608.770 305.100,603.600 C309.826,603.562 314.771,603.281 317.700,605.100 C321.132,607.232 320.469,610.142 322.500,613.800 C324.119,616.716 327.952,618.600 329.700,621.300 C331.722,624.423 332.471,627.624 334.500,630.600 C336.037,632.855 338.162,633.631 339.300,636.600 C348.472,636.139 354.123,634.071 361.200,638.700 C361.249,641.488 360.635,641.932 359.700,643.500 C366.599,654.401 381.598,655.412 389.100,665.400 C388.741,668.472 386.437,671.693 388.800,673.800 C391.418,672.210 391.544,669.926 393.300,667.500 C393.969,666.575 409.006,656.182 410.100,655.800 C415.271,653.994 418.573,656.947 423.900,656.400 C428.713,655.906 431.507,656.045 434.700,658.500 C435.500,660.500 436.300,662.500 437.100,664.500 C439.300,667.200 441.500,669.900 443.700,672.600 C445.732,676.386 445.107,680.408 448.800,682.500 C454.710,681.244 455.862,675.944 459.900,672.900 C462.800,671.100 465.700,669.300 468.600,667.500 C469.900,665.700 471.200,663.900 472.500,662.100 C475.200,661.500 477.900,660.900 480.600,660.300 C480.699,656.443 486.368,650.700 488.700,648.600 C490.300,648.800 491.900,649.000 493.500,649.200 C495.007,648.422 494.461,646.990 497.400,646.800 C498.000,647.500 498.600,648.200 499.200,648.900 C510.073,642.372 512.573,654.114 520.200,657.000 C523.541,655.521 527.370,652.876 528.000,648.900 C529.143,641.685 523.560,632.905 525.000,627.300 C527.177,618.826 540.840,608.151 551.400,615.300 C551.225,617.781 550.324,618.422 550.200,620.100 C551.754,621.313 552.608,623.034 554.700,623.700 C557.441,616.747 559.394,619.629 564.300,615.900 C566.461,614.258 567.048,609.926 569.400,608.700 C573.809,606.402 577.155,607.054 582.300,606.600 C587.501,606.141 592.438,601.665 598.500,601.800 C601.971,601.878 605.978,598.210 611.100,599.400 C615.219,600.357 615.005,603.331 617.700,605.100 C619.200,605.700 620.700,606.300 622.200,606.900 C625.903,604.839 627.424,604.127 630.300,601.200 C632.960,601.456 634.365,602.074 636.300,600.900 C636.636,598.680 635.531,596.414 636.000,594.300 C637.061,589.520 645.824,578.407 653.400,580.800 C655.039,581.318 654.946,583.118 656.100,583.800 C658.329,585.117 660.424,583.205 662.700,584.100 C664.056,584.846 664.288,586.142 665.400,587.100 C675.902,583.354 680.487,585.956 688.800,591.300 C690.200,591.900 691.600,592.500 693.000,593.100 C694.654,595.544 694.099,599.608 695.100,602.100 C695.200,602.100 695.300,602.100 695.400,602.100 C695.628,602.056 705.418,600.396 705.600,600.300 C710.286,597.814 717.410,591.375 726.900,594.000 C729.500,595.800 732.100,597.600 734.700,599.400 C739.656,596.206 738.282,582.852 740.700,577.200 C746.544,563.539 755.708,535.010 779.700,540.600 C784.691,541.763 787.457,545.813 791.400,548.100 C797.477,544.332 800.134,536.444 807.000,533.100 C819.017,527.248 828.580,535.828 837.900,538.200 C840.500,538.000 843.100,537.800 845.700,537.600 C852.561,536.870 856.426,540.216 860.400,542.700 C860.199,549.480 860.767,554.173 864.000,557.400 C863.800,558.600 863.600,559.800 863.400,561.000 C864.886,563.451 868.187,563.935 869.700,566.100 C872.132,569.580 873.678,572.824 876.900,575.400 C877.100,575.100 877.300,574.800 877.500,574.500 C880.208,568.253 880.487,554.502 883.800,549.600 C886.408,545.743 889.621,547.218 892.800,544.800 C893.200,544.000 893.600,543.200 894.000,542.400 C898.166,539.497 905.334,543.590 907.800,544.800 C913.101,541.105 907.320,529.454 909.000,522.300 C909.773,519.009 912.919,515.671 915.300,513.900 C931.866,501.576 961.204,525.611 959.400,540.300 C959.600,540.400 959.800,540.500 960.000,540.600 C961.679,539.599 963.932,536.888 967.200,538.500 C969.770,539.768 968.808,544.298 971.100,545.700 C975.610,548.459 980.964,550.066 985.500,552.300 C988.100,553.100 990.700,553.900 993.300,554.700 C1001.124,558.916 1008.174,567.712 1012.500,575.400 C1013.700,578.200 1014.900,581.000 1016.100,583.800 C1018.549,587.525 1024.824,586.291 1028.400,588.900 C1031.678,591.291 1032.799,595.888 1035.300,599.100 C1037.900,601.500 1040.500,603.900 1043.100,606.300 C1047.946,612.740 1047.751,623.713 1053.300,629.400 C1059.296,628.992 1067.382,626.787 1073.700,628.200 C1075.515,632.059 1086.433,646.443 1089.600,648.900 C1091.900,648.700 1094.200,648.500 1096.500,648.300 C1097.000,647.800 1097.500,647.300 1098.000,646.800 C1097.579,645.721 1097.396,644.994 1097.700,643.800 C1102.156,642.992 1107.368,641.888 1112.700,642.900 C1113.384,643.631 1113.535,644.489 1113.900,645.600 C1122.361,645.518 1133.240,642.612 1140.900,646.200 C1142.300,647.500 1143.700,648.800 1145.100,650.100 C1148.248,651.513 1151.270,650.974 1153.800,652.500 C1154.558,656.306 1163.279,666.649 1166.100,669.300 C1170.240,668.467 1174.397,670.764 1178.400,669.900 C1178.472,668.163 1182.640,658.074 1183.500,657.600 C1188.264,654.976 1198.158,652.808 1201.200,658.200 C1200.569,661.093 1198.299,670.280 1199.100,673.500 C1200.141,677.687 1215.388,691.435 1220.700,692.100 C1230.686,685.116 1232.334,689.964 1238.100,696.300 C1240.100,695.000 1242.100,693.700 1244.100,692.400 C1249.799,691.100 1255.501,689.800 1261.200,688.500 C1264.952,686.439 1263.659,681.590 1271.700,680.100 C1277.553,679.016 1279.194,684.618 1284.900,683.700 C1289.429,680.510 1290.021,670.897 1296.000,669.600 C1302.085,668.280 1307.348,675.927 1314.300,674.700 C1316.692,672.907 1319.583,667.827 1324.200,668.700 C1326.302,669.098 1328.904,670.211 1330.800,669.900 C1331.340,666.995 1333.413,665.213 1335.300,663.600 C1338.851,663.775 1342.971,664.773 1346.400,663.900 C1346.463,662.202 1346.725,661.886 1347.300,660.900 C1354.890,659.358 1352.321,655.871 1355.400,650.100 C1358.021,645.187 1364.066,643.980 1368.600,640.800 C1369.800,639.600 1371.000,638.400 1372.200,637.200 C1381.762,635.078 1388.635,640.677 1395.900,642.300 C1399.600,641.400 1403.300,640.500 1407.000,639.600 C1410.898,640.348 1411.988,644.327 1416.900,644.700 C1419.700,643.600 1422.500,642.500 1425.300,641.400 C1430.348,640.246 1437.864,641.391 1441.500,642.600 C1448.617,644.967 1451.017,651.647 1457.100,654.900 C1459.100,654.200 1461.100,653.500 1463.100,652.800 C1466.700,653.500 1470.300,654.200 1473.900,654.900 C1474.600,655.700 1475.300,656.500 1476.000,657.300 C1478.508,658.135 1480.640,657.557 1483.200,658.500 C1483.212,662.969 1483.165,669.851 1484.700,672.300 C1488.695,673.316 1488.856,672.119 1492.200,671.400 C1495.933,674.476 1499.609,675.360 1501.500,680.400 C1502.500,680.300 1503.500,680.200 1504.500,680.100 C1505.455,677.888 1506.110,676.219 1508.400,675.300 C1514.747,674.331 1519.431,681.521 1528.200,677.100 C1533.502,674.427 1544.493,663.770 1547.100,658.500 C1548.858,654.947 1547.622,651.169 1550.100,648.600 C1552.297,646.322 1556.939,646.090 1559.700,644.400 C1560.058,642.093 1561.411,640.991 1561.800,639.300 C1562.380,636.777 1560.058,633.300 1561.500,630.600 C1562.766,628.228 1566.106,626.403 1567.500,624.300 C1567.600,623.300 1567.700,622.300 1567.800,621.300 C1568.705,619.604 1572.473,619.878 1573.500,618.000 C1575.045,615.175 1574.254,612.231 1575.900,609.900 C1576.795,608.634 1587.713,602.283 1590.300,603.300 C1591.400,604.400 1592.500,605.500 1593.600,606.600 C1595.800,605.500 1598.000,604.400 1600.200,603.300 C1603.100,603.800 1606.000,604.300 1608.900,604.800 C1610.526,604.398 1611.504,602.261 1614.300,603.000 C1617.881,603.946 1623.306,606.953 1629.300,605.400 C1630.700,604.600 1632.100,603.800 1633.500,603.000 C1635.800,603.100 1638.100,603.200 1640.400,603.300 C1642.094,602.930 1644.412,601.998 1646.700,601.800 C1650.248,604.099 1653.741,608.345 1658.100,609.600 C1664.399,609.000 1670.701,608.400 1677.000,607.800 C1681.554,608.684 1683.119,611.881 1686.300,613.800 C1689.265,614.864 1692.205,613.196 1694.100,612.600 C1695.900,612.800 1697.700,613.000 1699.500,613.200 C1701.564,612.624 1701.485,610.586 1704.600,610.200 C1705.800,610.900 1707.000,611.600 1708.200,612.300 C1709.202,610.588 1711.665,610.347 1713.600,611.400 C1714.018,612.575 1728.194,620.257 1730.700,622.800 C1732.445,622.893 1734.295,622.910 1735.200,622.200 C1733.396,617.148 1735.191,613.400 1737.000,608.700 C1745.677,605.573 1760.152,595.357 1770.300,602.700 C1770.800,602.600 1771.300,602.500 1771.800,602.400 C1773.018,593.007 1791.021,596.208 1800.000,596.400 ZM-0.000,-0.000 L1.000,-0.000 L1.000,1.000 L-0.000,1.000 L-0.000,-0.000 L-0.000,-0.000 Z"/>
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
              <div style={frontForegroundStyle} className="parallax-layer front-foreground-element">
                  <div className="bounding-box-wrapper">
                    <img src={parallaxLayer3}/>
                    <svg viewBox="0 0 1800 2400" preserveAspectRatio="xMinYMin meet">
                    <defs>
                      <clipPath clipPathUnits="objectBoundingBox"  transform="scale(0.00055555555,0.00041666666)" id="front-foreground-clip">
                        <path d="M1298.000,850.000 C1298.333,848.000 1298.667,846.000 1299.000,844.000 C1315.677,836.963 1327.731,831.818 1340.000,821.000 C1344.754,816.808 1346.917,807.161 1354.000,803.000 C1356.339,801.626 1358.873,802.989 1362.000,802.000 C1365.932,800.756 1369.699,797.135 1374.000,796.000 C1381.708,793.966 1392.296,798.587 1396.000,797.000 C1401.340,794.902 1400.801,789.379 1405.000,787.000 C1410.942,783.633 1431.666,781.468 1438.000,786.000 C1443.630,788.006 1446.595,793.724 1451.000,797.000 C1463.333,806.172 1474.076,816.447 1485.000,827.000 C1490.308,832.128 1496.623,841.474 1504.000,844.000 C1507.981,845.363 1514.855,844.391 1518.000,845.000 C1522.749,855.265 1534.523,856.659 1543.000,863.000 C1553.970,871.206 1559.890,902.139 1574.000,905.000 C1576.186,901.861 1584.453,897.146 1590.000,901.000 C1601.548,904.928 1604.397,915.085 1611.000,924.000 C1615.000,928.000 1619.000,932.000 1623.000,936.000 C1625.144,939.580 1624.418,944.050 1627.000,947.000 C1630.823,951.368 1639.357,954.865 1642.000,960.000 C1642.667,964.000 1643.333,968.000 1644.000,972.000 C1645.709,975.314 1651.392,977.333 1654.000,980.000 C1655.333,980.000 1656.667,980.000 1658.000,980.000 C1663.155,974.653 1672.642,967.504 1673.000,958.000 C1671.757,956.433 1672.358,957.490 1673.000,956.000 C1674.842,950.557 1680.427,945.620 1686.000,944.000 C1689.098,943.100 1691.811,944.540 1694.000,943.000 C1696.269,941.403 1697.071,937.072 1699.000,935.000 C1702.210,931.553 1708.301,929.862 1711.000,926.000 C1711.667,924.000 1712.333,922.000 1713.000,920.000 C1716.665,914.664 1724.512,913.509 1729.000,909.000 C1732.316,905.669 1732.245,899.994 1735.000,896.000 C1738.666,893.334 1742.334,890.666 1746.000,888.000 C1749.333,888.333 1752.667,888.667 1756.000,889.000 C1758.446,892.558 1764.056,894.396 1766.000,898.000 C1766.333,900.000 1766.667,902.000 1767.000,904.000 C1769.666,906.333 1772.334,908.667 1775.000,911.000 C1778.680,917.717 1775.060,923.589 1781.000,929.000 C1783.230,931.032 1789.363,935.146 1792.000,936.000 C1795.289,937.065 1797.874,933.355 1800.000,936.000 C1800.000,1071.653 1800.000,1207.347 1800.000,1343.000 C1800.000,1695.298 1800.000,2047.702 1800.000,2400.000 C1200.060,2400.000 599.940,2400.000 -0.000,2400.000 C-0.000,1883.385 -0.000,1366.615 -0.000,850.000 C1.754,849.369 0.971,849.807 2.000,849.000 C5.214,850.066 7.353,852.202 10.000,851.000 C20.659,847.379 19.991,837.719 27.000,831.000 C31.458,826.727 36.970,830.434 44.000,828.000 C51.793,825.302 49.660,818.205 62.000,818.000 C67.721,823.359 80.308,822.318 85.000,827.000 C87.136,829.131 96.033,857.081 97.000,862.000 C98.257,862.650 99.071,863.089 100.000,864.000 C106.946,862.047 107.743,856.876 116.000,856.000 C119.395,859.658 123.529,863.455 130.000,864.000 C132.519,861.363 135.364,858.521 138.000,856.000 C138.000,854.667 138.000,853.333 138.000,852.000 C140.000,851.667 142.000,851.333 144.000,851.000 C145.421,847.642 146.409,844.400 150.000,843.000 C155.245,839.568 167.923,842.695 174.000,843.000 C179.090,835.293 187.683,830.525 194.000,824.000 C199.940,824.026 204.273,825.195 208.000,826.000 C217.953,828.149 229.227,817.206 233.000,812.000 C234.724,809.621 239.177,807.130 240.000,804.000 C239.333,801.334 238.667,798.666 238.000,796.000 C238.317,794.449 241.458,791.527 242.000,790.000 C242.333,786.667 242.667,783.333 243.000,780.000 C244.325,777.377 248.804,775.116 250.000,772.000 C250.000,770.000 250.000,768.000 250.000,766.000 C251.003,763.297 255.093,760.728 256.000,758.000 C255.667,754.667 255.333,751.333 255.000,748.000 C256.246,743.830 259.946,735.708 266.000,735.000 C270.561,732.213 278.561,736.234 282.000,738.000 C292.676,743.482 301.211,760.702 312.000,762.000 C314.416,760.222 331.115,756.592 332.000,757.000 C336.692,757.690 337.656,758.930 338.000,764.000 C341.578,763.977 343.414,763.538 346.000,763.000 C349.496,757.126 354.089,738.074 360.000,736.000 C377.046,730.020 390.303,749.092 396.000,747.000 C402.471,744.770 405.558,738.004 412.000,736.000 C426.924,731.357 442.053,749.100 452.000,746.000 C460.563,743.331 471.424,732.351 486.000,736.000 C495.544,738.389 501.206,746.204 512.000,747.000 C516.650,742.379 527.012,737.698 534.000,736.000 C539.515,734.660 544.795,737.151 548.000,738.000 C563.792,742.181 582.040,739.599 583.000,758.000 C581.600,760.240 582.455,761.276 583.000,764.000 C584.257,764.650 585.071,765.089 586.000,766.000 C587.754,765.369 586.971,765.807 588.000,765.000 C597.784,761.733 600.424,752.536 614.000,752.000 C615.941,753.804 635.444,763.319 638.000,764.000 C642.000,763.333 646.000,762.667 650.000,762.000 C652.675,762.552 655.646,765.329 658.000,766.000 C661.333,766.000 664.667,766.000 668.000,766.000 C675.619,768.044 675.133,775.000 684.000,776.000 C688.000,772.000 692.000,768.000 696.000,764.000 C697.133,761.004 695.657,758.319 697.000,756.000 C699.666,751.398 702.701,752.096 703.000,744.000 C700.714,741.339 701.557,741.096 702.000,737.000 C702.667,737.000 703.333,737.000 704.000,737.000 C706.341,735.320 715.656,735.345 718.000,737.000 C722.995,738.874 721.708,742.151 728.000,743.000 C736.428,731.660 741.654,740.067 756.000,736.000 C763.974,733.739 767.203,727.351 778.000,727.000 C781.084,731.339 787.138,733.683 790.000,738.000 C794.858,745.327 801.060,764.126 810.000,766.000 C815.717,766.318 828.330,759.341 838.000,763.000 C847.481,766.588 849.519,776.572 863.000,777.000 C872.713,764.863 894.709,774.155 912.000,771.000 C914.541,765.740 925.373,751.681 932.000,751.000 C936.116,748.072 950.622,748.250 956.000,751.000 C958.333,753.666 960.667,756.334 963.000,759.000 C967.333,759.667 971.667,760.333 976.000,761.000 C978.236,761.971 981.326,765.284 984.000,766.000 C988.666,765.333 993.334,764.667 998.000,764.000 C1001.188,764.849 1002.728,768.192 1006.000,767.000 C1012.682,764.677 1023.774,751.507 1032.000,755.000 C1036.468,756.441 1038.146,760.582 1042.000,762.000 C1045.333,762.333 1048.667,762.667 1052.000,763.000 C1054.040,763.996 1056.817,767.914 1059.000,769.000 C1062.666,769.667 1066.334,770.333 1070.000,771.000 C1071.478,771.533 1075.732,774.598 1077.000,775.000 C1082.565,776.763 1083.607,771.969 1086.000,771.000 C1087.292,770.477 1116.947,772.332 1118.000,773.000 C1125.845,775.847 1127.422,785.748 1134.000,790.000 C1143.999,793.000 1154.001,796.000 1164.000,799.000 C1169.720,802.505 1170.511,808.474 1175.000,813.000 C1177.655,815.677 1182.211,816.449 1185.000,819.000 C1187.383,821.180 1188.706,824.706 1191.000,827.000 C1195.407,831.406 1201.311,834.938 1205.000,840.000 C1208.581,844.912 1210.959,850.473 1215.000,855.000 C1218.009,858.371 1223.402,860.259 1226.000,864.000 C1230.803,870.916 1234.947,882.714 1245.000,884.000 C1247.328,880.020 1250.262,873.605 1254.000,871.000 C1262.431,865.124 1286.143,850.389 1298.000,850.000 ZM-0.000,1.000 L1.000,1.000 L1.000,-0.000 L-0.000,-0.000 L-0.000,1.000 Z"/>
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
              <div className="scroll-link-wrapper">
                <ScrollLink className="scroll-link" to="section-two" smooth={true} duration={2000}>
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAFkAAABZAB0rFnsQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAGCSURBVHic7du7SgNBAEbhhEAk+tgGBDsbEbTV3ktjOt9GsfJWH4vsQNBkL9ndyczu+SD1/HNYwhbJZCJJkiRJkiRJkiRJkiRJGivgCLgEfoBXYAnMD72rL8AcOAPegS/gBjiOcfAV/90PMXYR+WHLfa/7PngKfG85eHCxSyJTPNnTvgd87jicYlj2sSsiA3zEGHFRMiD72DUiA5ynMiTL2MXdHivuFu8rEpgBdxWDnoFFlEEdABbAquJOt8As9rDBxE428sbA7GMnH3ljaJ3YqxRjZxM5yDF2dpGDnGJnGznIIXb2kYOUYw8mcpBi7MFFDlKKPdjIQQqxBx85OGTs0UQODhF7dJGDmLFHGzmIEXv0kYM+Yxv5jz5iG3mHLmMbuUIXsY1cU5vYRm5on9jACfBi5IaaxDZyS9T7KcNT8SkzqF9N9aLmk+2T3IUWsY3c1B6xjbyvBrGN3FaN2EbuSklsI3eN9avfEnhj/ZeOU3yFkyRJkiRJkiRJkiRJkiTF9wvzcSXAguNTSgAAAABJRU5ErkJggg=="/>
                </ScrollLink>
              </div>
              <div className="scroll-protector"></div>
            </section>
            <section id="section-two" className="section-two full-height">
            </section>
          
          </div>
      )}/>
    );
  }
}

export default App;

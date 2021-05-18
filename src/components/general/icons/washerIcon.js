import React from "react";
import PropTypes from "prop-types";

const defaultStyles = { display: "inline-block", verticalAlign: "middle" };

const WasherIcon = ({ size, className, style, viewBox }) => {
  const styles = { ...defaultStyles, ...style };
  return (
    <svg
      className={className}
      style={styles}
      viewBox={viewBox}
      width={`${size}px`}
      height={`${size}px`}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >  
      <g>
        <g>
          <g>
            <path d="M442.656,0H69.347C46.589,0,28.074,18.515,28.074,41.273v429.453c0,22.758,18.515,41.273,41.272,41.273h373.309
              c22.756,0,41.27-18.515,41.27-41.273V41.273C483.926,18.515,465.412,0,442.656,0z M442.656,495.512H69.347
              c-10.777,0-19.963-6.916-23.369-16.541h420.046C462.618,488.595,453.431,495.512,442.656,495.512z M467.438,462.482H44.562
              V104.063h422.875V462.482z M197.828,66.645V38.57c0-2.692,2.274-4.967,4.967-4.967h106.408c2.692,0,4.967,2.274,4.967,4.967
              v28.074c0,2.693-2.274,4.968-4.967,4.968H202.795C200.102,71.612,197.828,69.338,197.828,66.645z M467.438,87.575H313.867
              c9.593-2.138,16.789-10.703,16.789-20.93V38.57c0-11.831-9.625-21.456-21.456-21.456H202.793
              c-11.831,0-21.456,9.625-21.456,21.456v28.074c0,10.227,7.198,18.792,16.789,20.93H44.562V41.273
              c0-13.667,11.117-24.785,24.784-24.785h373.309c13.666,0,24.782,11.119,24.782,24.785V87.575z"/>
            <path d="M286.031,343.524c8.292,0,15.016-6.724,15.016-15.016c0-8.29-6.724-15.014-15.016-15.014
              c-8.29,0-15.014,6.724-15.014,15.014C271.017,336.799,277.741,343.524,286.031,343.524z"/>
            <circle cx="206.459" cy="301.931" r="11.56"/>
            <path d="M161.322,40.223c-6.838,0-12.384,5.544-12.384,12.385s5.546,12.386,12.384,12.386c6.844,0,12.389-5.546,12.389-12.386
              C173.71,45.767,168.164,40.223,161.322,40.223z"/>
            <circle cx="390.588" cy="52.608" r="12.385"/>
            <path d="M256.001,406.263c71.929,0,130.447-58.518,130.447-130.447c0-71.927-58.518-130.444-130.447-130.444
              c-63.911,0-117.23,46.202-128.322,106.96h-3.839v46.971h3.84C138.771,360.06,192.09,406.263,256.001,406.263z M256.001,161.86
              c62.837,0,113.958,51.12,113.958,113.956c0,62.837-51.121,113.958-113.958,113.958c-62.836,0-113.956-51.121-113.956-113.958
              C142.044,212.98,193.165,161.86,256.001,161.86z"/>
            <path d="M256.001,383.143c59.18,0,107.327-48.147,107.327-107.327S315.18,168.489,256.001,168.489
              s-107.327,48.147-107.327,107.327S196.821,383.143,256.001,383.143z M256.001,184.978c39.95,0,73.932,25.933,86.063,61.84
              c-5.75,2.191-10.968,5.551-15.379,9.959c-5.225,5.228-12.209,8.107-19.671,8.107s-14.449-2.88-19.677-8.109
              c-17.279-17.279-45.393-17.278-62.674,0.001c-5.228,5.228-12.215,8.108-19.674,8.108c-7.46,0-14.449-2.88-19.679-8.111
              c-4.408-4.405-9.625-7.764-15.373-9.953C182.067,210.912,216.051,184.978,256.001,184.978z M166.07,263.1
              c2.799,1.332,5.361,3.115,7.582,5.335c8.343,8.342,19.472,12.938,31.337,12.938c11.864,0,22.992-4.596,31.333-12.938
              c10.853-10.85,28.508-10.849,39.356-0.001c8.341,8.343,19.469,12.939,31.337,12.939s22.995-4.596,31.328-12.936
              c2.223-2.221,4.787-4.004,7.588-5.337c0.585,4.157,0.908,8.399,0.908,12.716c0,50.088-40.749,90.838-90.838,90.838
              c-50.089,0-90.838-40.749-90.838-90.838C165.162,271.498,165.485,267.259,166.07,263.1z"/>
            <circle cx="350.679" cy="52.608" r="12.385"/>
          </g>
        </g>
      </g>
    </svg>
  );
};

WasherIcon.defaultProps = {
  size: 16,
  color: "#000000",
  viewBox: "0 0 24 24",
  className: "",
};

WasherIcon.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string,
  viewBox: PropTypes.string.isRequired,
  style: PropTypes.shape(PropTypes.object),
  className: PropTypes.string,
};

export default WasherIcon;
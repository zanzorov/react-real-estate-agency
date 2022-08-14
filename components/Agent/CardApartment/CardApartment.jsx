import styles from "./cardApartment.module.css";
import { BsGeoAltFill } from "react-icons/bs";
import { BsCameraVideoFill } from "react-icons/bs";
import { BsCameraFill } from "react-icons/bs";
import { MdOutlineBedroomParent } from "react-icons/md";
import { BiBath} from "react-icons/bi";
import { TbLayoutBoard } from "react-icons/tb";
import { BsFillShareFill } from "react-icons/bs";
import { FiPlus } from "react-icons/fi";
import Link from "next/link";
import "aos/dist/aos.css";
import IconModal from "../IconModal/IconModal";
import { ImArrowDown } from "react-icons/im";
import { useState } from "react";
import { FaHeart } from "react-icons/fa";

const CardApartment = ({ apartment }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className={styles.card} data-aos="fade-left">
        <div className={styles.tag_wrapper}>
          <div className={styles.featured_wrapper}>Featured</div>
          <div className={styles.rentals}>{apartment.status}</div>
        </div>
        <Link href={`/property/${apartment._id}`}>
          <div className={styles.img_container}>
            <img src={apartment.image[0]} alt="apartment photo" />
          </div>
        </Link>
        <div className={styles.icon_details_wrapper}>
          <div className={styles.details_wrapper}>
            <BsGeoAltFill className={styles.goLocation} />
            <Link href={`/map`}>
              <b>Winchester,</b>
            </Link>
            <Link href={`/map`}>
              <b>Las Vegas</b>
            </Link>
          </div>
          <div className={styles.icon_details}>
            <BsCameraVideoFill className={styles.cameraVideo} />
            <BsCameraFill className={styles.cameraFill} />
            <span className={styles.number}>5</span>
          </div>
        </div>
        <div className={styles.info_container}>
          <h3>{apartment.name} </h3>
          <h4>{apartment.price} $</h4>
          <p>{apartment.description.slice(0, 130) + "..."}</p>
          <div className={styles.icons}>
            <span>
              <MdOutlineBedroomParent /> {apartment.bedroom}
            </span>
            <span>
              <BiBath /> {apartment.bathroom}
            </span>
            <span>
              <TbLayoutBoard /> {apartment.size} ft<sup>2</sup>
            </span>
          </div>
        </div>
        <div className={styles.agentInfo_canteiner}>
          <div className={styles.agent_photo_name}>
            <img src={apartment.realtor.image} alt="agent_photo" />
            <span>{apartment.realtor.name}</span>
          </div>
          <div className={styles.agent_icons}>
            {open && (
              <>
                <div className={styles.icon_modal_wrapper}>
                  <IconModal />
                </div>
                <div className={styles.arrowDown}>
                  <ImArrowDown className={styles.arrow} />
                </div>
              </>
            )}
            <span onClick={() => setOpen(!open)}>
              <BsFillShareFill className={styles.menu_icons} />
            </span>
            <span>
              <FaHeart className={styles.passive_heart} />
            </span>
            <span>
              <FiPlus />
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardApartment;

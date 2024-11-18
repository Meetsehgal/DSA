import "./AwardsCategoryPage.css";
import NoImg from "../../../../assets/img/no-image.jpg";
import { useEffect, useState } from "react";
export default function AwardsCategoryPage({ data }) {

    const [filteredData, setFilteredData] = useState(data);
    const [categoryHeading, setCategoryHeading] = useState("")


    const getFilteredData = (category) => {
        setCategoryHeading(category)
        const filtered = data.filter(item => item.fld_category === category);
        setFilteredData(filtered);
    }

    useEffect(() => {
        const defaultData = data.filter(item => item?.fld_category === "Peace Time")
        setFilteredData(defaultData);
    }, [data]);

    console.log(filteredData, "khfkjh uhf io")

    return (
        <section className="section-spacing pb-0 pt-0 awards-page">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 section-spacing-y">
                        <div className="category-tab">
                            <p>
                                Categories
                            </p>
                            <ul>
                                <li onClick={() => getFilteredData('Peace Time')}>
                                    Peace Time
                                </li>
                                <li onClick={() => getFilteredData('War Time')}>
                                    War Time
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-12 mb-4">
                        <div className="main-heading mt-4">
                            <h2>{categoryHeading ? categoryHeading : "Peace Time"}</h2>
                        </div>
                    </div>
                </div>
                {filteredData?.map((item) => {
                    return (
                        <div className="row awad-page-card">
                            <div className="col-lg-5 image-section text-center">
                                <img src={item?.fld_image} className="img-fluid" alt="" />
                            </div>
                            <div className="col-lg-7 ps-lg-4">
                                <div className="ps-lg-2">
                                    <b className="fs-2">{item?.fld_heading}</b>
                                    <p className="mt-3">
                                        {item?.fld_long_desc}
                                        {/* <b>Bar:</b> If a recipient of the Chakra shall again perform such an act of gallantry as would have made him or her */}
                                    </p>
                                    {/* <p className="mt-3">eligible to receive the Chakra, such further act of gallantry shall be recognised by a Bar to be attached to the riband by which the Chakra is suspended and, for every subsequent act of gallantry, an additional Bar shall be added and any such Bar or Bars may also be awarded posthumously. For every Bar awarded a replica of the Chakra in miniature shall be added to the riband when worn alone.</p>
                        <p className="mt-3"><b>Medal:</b> Circular in shape, one and three eighth inches in diameter, with rims on both sides. The medal shall be of gold gild. On the obverse of the medal shall be embossed a replica of Ashok Chakra’s in the centre, surrounded by a lotus wreath. Along the rim, on the inner side, shall be a pattern of lotus leaves, flowers and buds. On its reverse shall be embossed the words “Ashok Chakra” both in Hindi and English the two versions being separated by two lotus flowers..</p>
                        <p className="mt-3"><b>Ribbon:</b> Green colour ribbon divided into two equal segments by an orange vertical line.</p> */}
                                </div>
                            </div>
                        </div>
                    )
                })}

                {/* <div className="row mt-4 flex-lg-row-reverse">
                    <div className="col-lg-5 image-section">
                        <img src={NoImg} className="img-fluid" alt="" />
                    </div>
                    <div className="col-lg-7">
                        <b>Ashok chakra</b>
                        <p className="mt-3">
                            <b>Bar:</b> If a recipient of the Chakra shall again perform such an act of gallantry as would have made him or her
                        </p>
                        <p className="mt-3">eligible to receive the Chakra, such further act of gallantry shall be recognised by a Bar to be attached to the riband by which the Chakra is suspended and, for every subsequent act of gallantry, an additional Bar shall be added and any such Bar or Bars may also be awarded posthumously. For every Bar awarded a replica of the Chakra in miniature shall be added to the riband when worn alone.</p>
                        <p className="mt-3"><b>Medal:</b> Circular in shape, one and three eighth inches in diameter, with rims on both sides. The medal shall be of gold gild. On the obverse of the medal shall be embossed a replica of Ashok Chakra’s in the centre, surrounded by a lotus wreath. Along the rim, on the inner side, shall be a pattern of lotus leaves, flowers and buds. On its reverse shall be embossed the words “Ashok Chakra” both in Hindi and English the two versions being separated by two lotus flowers..</p>
                        <p className="mt-3"><b>Ribbon:</b> Green colour ribbon divided into two equal segments by an orange vertical line.</p>
                    </div>

                </div>
                <div className="row mt-4">
                    <div className="col-lg-5 image-section">
                        <img src={NoImg} className="img-fluid" alt="" />
                    </div>
                    <div className="col-lg-7">
                        <b>Ashok chakra</b>
                        <p className="mt-3">
                            <b>Bar:</b> If a recipient of the Chakra shall again perform such an act of gallantry as would have made him or her
                        </p>
                        <p className="mt-3">eligible to receive the Chakra, such further act of gallantry shall be recognised by a Bar to be attached to the riband by which the Chakra is suspended and, for every subsequent act of gallantry, an additional Bar shall be added and any such Bar or Bars may also be awarded posthumously. For every Bar awarded a replica of the Chakra in miniature shall be added to the riband when worn alone.</p>
                        <p className="mt-3"><b>Medal:</b> Circular in shape, one and three eighth inches in diameter, with rims on both sides. The medal shall be of gold gild. On the obverse of the medal shall be embossed a replica of Ashok Chakra’s in the centre, surrounded by a lotus wreath. Along the rim, on the inner side, shall be a pattern of lotus leaves, flowers and buds. On its reverse shall be embossed the words “Ashok Chakra” both in Hindi and English the two versions being separated by two lotus flowers..</p>
                        <p className="mt-3"><b>Ribbon:</b> Green colour ribbon divided into two equal segments by an orange vertical line.</p>
                    </div>

                </div> */}
            </div>
        </section>
    )
}
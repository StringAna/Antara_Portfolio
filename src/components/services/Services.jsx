import React from 'react';
import './Services.css';
import Image1 from '../../assets/service-1.svg'
import Image2 from '../../assets/service-2.svg'
import Image3 from '../../assets/service-3.svg'

const data = [
    {
        id: 1,
        image: Image1,
        title: "Machine Learning and Artificial Intelligence",
        description:
            "Pioneering cutting-edge ML and AI solutions using TensorFlow, PyTorch, and scikit-learn to automate processes, enhance efficiency, and solve complex real-world challenges",
    },
    {
        id: 2,
        image: Image2,
        title: "Natural Language Processing",
        description:
            " Enabling seamless human-computer interaction and unlocking valuable insights from unstructured text data using advanced techniques like Transformers, LSTMs, and Word Embeddings. Skilled in utilizing NLTK, spaCy, and language modeling to create impactful NLP solutions",
    },
    {
        id: 3,
        image: Image3,
        title: "Big Data Analytics",
        description:
            "Harnessing the power of big data using Hadoop, Apache Spark, and MapReduce to unearth hidden patterns and drive business growth. Proficient in using Pandas, NumPy, and Matplotlib to preprocess and analyze vast datasets, demonstrated through projects and schoolwork.",
    },
    {
        id: 4,
        image: Image1,
        title: "Automation and Business Intelligence",
        description:
            "Streamlining workflows and driving operational efficiency through smart automation solutions using UiPath Studio and Orchestrator. Skilled in developing data pipelines and leveraging Power BI and Tableau to transform complex data into actionable insights, showcased in the automation projects at George Mason University Fiscal Services.",
    },
    {
        id: 5,
        image: Image2,
        title: "Software Development",
        description:
            "Crafting tailored software solutions using Python, JavaScript, React, Node.js, and C# (.NET) to align with unique business needs and deliver measurable results. Experienced in developing full-stack web applications at Mercedes-Benz and creating impactful tools like the Workspace Archiver VSCode extension.",
    }
];

const Services = () => {
    return (
        <section className="services container section" id="services">
            <h2 className="section__title">Services</h2>

            <div className="services__container grid">
                {data.map(({ id, image, title, description }) => {
                    return (
                        <div className="services__card" key={id}>
                            <img src={image} alt='' className='services__img' width="80" />

                            <h3 className="services__title">{title}</h3>
                            <p className="services__description">{description}</p>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Services
import Image from 'next/image';

interface CorePillarProps {
    imageLink: string;
    title: string;
    left: boolean;
    altText: string;
    text: string;
}

const CorePillar = (props: CorePillarProps) => {
    return (
        <div className={`${props.left ? 'flex ml-56' : 'flex flex-row-reverse mr-40'}`}>
            <Image
            src={props.imageLink}
            alt={props.altText} // make prop
            width={415}
            height={415}
            className ="rounded-xl" // makes image rounded corners
            /> 
            <div className="flex flex-col">
                <div className={`${props.left ? `ml-7 text-start` : 'mr-5 text-end'}`}>
                    <h2 className="font-Lato text:right text-3xl font-extralight text-transform:uppercase text-back underline underline-offset-8 decoration-1" >
                        {props.title}
                    </h2>
                </div>
                <div className={`${props.left ? `text-start ml-7` : 'text-end mr-1'}`}>  
                    <div className= "flex mt-4 justify-center w-full">
                            <div className="font-Lato font-thin text-xl leading-6 tracking-wider text:wrap text:black" style={{
                            width: '500px',
                            }}>
                                {props.text}
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CorePillar;
type Props = {
    title: string;
} 

const TitleOfPageOrSession = ({ title }: Props) => {
    return (
        <div className="border-bottom-1-solid-e5e5e5">
            <h6 className="font-size-16 font-w-600">{ title }</h6>
        </div>
    )
}

export default TitleOfPageOrSession;

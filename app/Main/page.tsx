import Image from 'next/image'

export default function Main() {
  return (
    <div>
      <h1>MAIN</h1>
      <p>
        This is the MAIN PAGE. 
      </p>
      <br></br>

      <p>Test image component: </p>
      <Image
      src="/next.svg"
      width={250}
      height={250}
      alt="Test Image"
      />

    </div>
  );
}
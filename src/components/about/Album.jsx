 import img1 from '../../assets/images/image1.jpg'
 import img2 from '../../assets/images/image 2.jpg'
 import img3 from '../../assets/images/image 3.jpg'
 import img4 from '../../assets/images/image 5.jpg'


function Album() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
      <img
        src={img1}
        alt="Preconstruction Design"
        className="w-full h-auto object-cover rounded-lg"
      />
      <div className="flex flex-col justify-center items-center text-center border-2 bg-gray-200 p-4 rounded-lg">
        <p className="font-bold text-xl mb-2">Preconstruction Design</p>
        <p>I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.</p>
      </div>
      <img
         src={img2}
        alt="Design & Construction Estimate"
        className="w-full h-auto object-cover rounded-lg"
      />
      <div className="flex flex-col justify-center items-center text-center border-2 bg-gray-200 p-4 rounded-lg">
        <p className="font-bold text-xl mb-2">Design & Construction Estimate</p>
        <p>I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.</p>
      </div>
 
      <img
        src={img3}
        alt="On-Site Consultations"
        className="w-full h-auto object-cover rounded-lg"
      />
 
      <div className="flex flex-col justify-center items-center text-center border-1 bg-gray-200 p-6 rounded-lg">
        <p className="font-bold text-xl mb-2">On-Site Consultations</p>
        <p>I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.</p>
      </div>
      
  
       <img src={img4}
        alt="The Finishing Touches"
        className="w-full h-auto object-cover rounded-lg"
      />
      <div className="flex flex-col justify-center items-center text-center border-2 bg-gray-200 p-4 rounded-lg">
        <p className="font-bold text-xl mb-2">The Finishing Touches</p>
        <p>I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.</p>
      </div>
    </div>
  );
}

export default Album;

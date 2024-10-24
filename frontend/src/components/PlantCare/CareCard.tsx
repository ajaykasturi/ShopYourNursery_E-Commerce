
import one from '../../assets/care/one.png';
import two from '../../assets/care/two.png';
import three from '../../assets/care/three.png';
import four from '../../assets/care/four.png';
import five from '../../assets/care/five.png';
import six from '../../assets/care/six.png';
const CareCard = () => {
  return (
    <div className="flex flex-wrap justify-between gap-6 p-5 w-full max-w-5xl mx-auto">
      {/* Card 1 */}
      <div className="bg-[#F5F5F5] rounded-[15px] p-6 w-[48%] h-auto text-center">
        {/* Image */}
        <img 
          src={one} 
          alt="Plant" 
          className="w-[114px] h-[114px] object-cover mx-auto mb-[30px]" 
        />

        <h2 className="font-poppins font-bold text-xl text-[#447128] mb-6">Fiddle Leaf Fig Care Tips</h2>

        <ul className="list-disc list-inside text-left font-poppins text-base text-gray-600 space-y-4">
          <li>Prefers bright, indirect light.</li>
          <li>Avoid direct sunlight, as it can scorch the leaves.</li>
          <li>Rotate the plant regularly to ensure even growth.</li>
        </ul>
      </div>

      {/* Card 2 */}
      <div className="bg-[#F5F5F5] rounded-[15px] p-6 w-[48%] h-auto text-center">
        <img 
          src={two} 
          alt="Plant" 
          className="w-[114px] h-[114px] object-cover mx-auto mb-[30px]" 
        />

        <h2 className="font-poppins font-bold text-xl text-[#447128] mb-6">Fiddle Leaf Fig Care Tips</h2>

        <ul className="list-disc list-inside text-left font-poppins text-base text-gray-600 space-y-4">
          <li>Prefers bright, indirect light.</li>
          <li>Avoid direct sunlight, as it can scorch the leaves.</li>
          <li>Rotate the plant regularly to ensure even growth.</li>
        </ul>
      </div>

      {/* Card 3 */}
      <div className="bg-[#F5F5F5] rounded-[15px] p-6 w-[48%] h-auto text-center">
        <img 
          src={three} 
          alt="Plant" 
          className="w-[114px] h-[114px] object-cover mx-auto mb-[30px]" 
        />

        <h2 className="font-poppins font-bold text-xl text-[#447128] mb-6">Fiddle Leaf Fig Care Tips</h2>

        <ul className="list-disc list-inside text-left font-poppins text-base text-gray-600 space-y-4">
          <li>Prefers bright, indirect light.</li>
          <li>Avoid direct sunlight, as it can scorch the leaves.</li>
          <li>Rotate the plant regularly to ensure even growth.</li>
        </ul>
      </div>

      {/* Card 4 */}
      <div className="bg-[#F5F5F5] rounded-[15px] p-6 w-[48%] h-auto text-center">
        <img 
          src={four} 
          alt="Plant" 
          className="w-[114px] h-[114px] object-cover mx-auto mb-[30px]" 
        />

        <h2 className="font-poppins font-bold text-xl text-[#447128] mb-6">Fiddle Leaf Fig Care Tips</h2>

        <ul className="list-disc list-inside text-left font-poppins text-base text-gray-600 space-y-4">
          <li>Prefers bright, indirect light.</li>
          <li>Avoid direct sunlight, as it can scorch the leaves.</li>
          <li>Rotate the plant regularly to ensure even growth.</li>
        </ul>
      </div>
      <div className="bg-[#F5F5F5] rounded-[15px] p-6 w-[48%] h-auto text-center">
        <img 
          src={five} 
          alt="Plant" 
          className="w-[114px] h-[114px] object-cover mx-auto mb-[30px]" 
        />

        <h2 className="font-poppins font-bold text-xl text-[#447128] mb-6">Fiddle Leaf Fig Care Tips</h2>

        <ul className="list-disc list-inside text-left font-poppins text-base text-gray-600 space-y-4">
          <li>Prefers bright, indirect light.</li>
          <li>Avoid direct sunlight, as it can scorch the leaves.</li>
          <li>Rotate the plant regularly to ensure even growth.</li>
        </ul>
      </div>

      {/* Card 4 */}
      <div className="bg-[#F5F5F5] rounded-[15px] p-6 w-[48%] h-auto text-center">
        <img 
          src={six} 
          alt="Plant" 
          className="w-[114px] h-[114px] object-cover mx-auto mb-[30px]" 
        />

        <h2 className="font-poppins font-bold text-xl text-[#447128] mb-6">Fiddle Leaf Fig Care Tips</h2>

        <ul className="list-disc list-inside text-left font-poppins text-base text-gray-600 space-y-4">
          <li>Prefers bright, indirect light.</li>
          <li>Avoid direct sunlight, as it can scorch the leaves.</li>
          <li>Rotate the plant regularly to ensure even growth.</li>
        </ul>
      </div>
    </div>
  );
};

export default CareCard;
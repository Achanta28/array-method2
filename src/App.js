import './App.css';
import Tollywood from './classes/Tollywood';
function App() {
  console.log(Tollywood.studio);
  let tollyWood = new Tollywood("Chiranjeevi","1978-present")
  console.log(tollyWood.name)
  console.log(  tollyWood.activeYears)
  
  

  
  let tollywoodStars = [
     "Chittoor V. Nagaiah","N. T. Rama Rao","Akkineni Nageswara Rao","S. V. Ranga Rao","Krishna",
     "Shobhan","Chiranjeevi", "Nagarjuna",  "Venkatesh", "Balakrishna", "Jr. NTR", "Mahesh Babu", 
     "Pawan Kalyan", "Prabhas", "Allu Arjun", "Ram Charan", "Nani", "Vijay Deverakonda", "Sai Dharam Tej", 
     "Varun Tej",
  ];
return (
    <div className="App">
      <h1>Array Methods</h1>
      <button type='button'  onClick={()=>{
        console.log(tollywoodStars)
        console.log(tollywoodStars.length)
        console.log(tollywoodStars[0])
        console.log(tollywoodStars[1])
        console.log(tollywoodStars[2])
        console.log(tollywoodStars[3])
        console.log(tollywoodStars[4])
        for(let i=0;i<tollywoodStars.length;i++){
          console.log(tollywoodStars[i])
          
        }

      }}>Length</button>
      <button type='button' onClick={()=>{
        for(let i=0;i<tollywoodStars.length;i++){
          console.log(tollywoodStars.at(i))
          
        }

      }}>At</button>
       <button type='button' onClick={()=>{
         console.log(tollywoodStars)
        console.log(tollywoodStars.toString())
}}>toString</button>
        <button type='button' onClick={()=>{
         console.log(tollywoodStars)
        console.log(tollywoodStars.join("-"))

       

      }}>Join</button>
      <button type='button' onClick={()=>{
         console.log(tollywoodStars)
        delete tollywoodStars[5];
        console.log(tollywoodStars)

        }}>Delete</button>
        <button type='button' onClick={()=>{
         console.log(tollywoodStars)
         console.log(tollywoodStars.pop())
         console.log(tollywoodStars)

        }}>Pop</button>
        <button type='button' onClick={()=>{
         console.log(tollywoodStars)
         console.log(tollywoodStars.shift())
         console.log(tollywoodStars)

        }}>Shift</button>
        <button type='button' onClick={()=>{
         console.log(tollywoodStars)
         console.log(tollywoodStars.push("Rana"))
         console.log(tollywoodStars)

        }}>Push</button>
         <button type='button' onClick={()=>{
         console.log(tollywoodStars)
         console.log(tollywoodStars.unshift("Savitri"))
         console.log(tollywoodStars)

        }}>UnShift</button>
         <button type='button' onClick={()=>{
         console.log(tollywoodStars)
         console.log(tollywoodStars.splice(2,0,"Kanchanamala","Santha Kumari","Pushpavalli"))
         
         console.log(tollywoodStars)

        }}>Splice</button>
         <button type='button' onClick={()=>{
        let number = [1,2,3]
        let alphabets = ["A","B","C"]

        let concatnation = number.concat(alphabets)
        console.log(concatnation)

        }}>Concat</button>
         <button type='button' onClick={()=>{
       let arr1 = [10,20,30]
       let arr2 = [...arr1,40,50]
       console.log(arr2)

       

        }}>Spread Operator</button>
        <button type='button' onClick={()=>{
        let numbers = [1,2,3]
        let alphabets = ["a","b","c"]
        let letters = ["veeresh","prakash","anandh"]

        let flatArr =  [numbers,alphabets,letters]
        console.log(flatArr.flat())

       

        }}>Flat</button>
        <button type='button' onClick={()=>{
        let slicedArr = tollywoodStars.slice(5,12)
        console.log(slicedArr)

       

        }}>Slice</button>
          <button type='button' onClick={()=>{
       let fillArr = tollywoodStars.fill("krishnam Raju")
        console.log(fillArr)

       

        }}>Fill</button>
        <button type='button' onClick={()=>{
      console.log(Array.from("Veeresh"))

       

        }}>From</button>
        <button type='button' onClick={()=>{
      console.log(tollywoodStars.includes("Nithin"))

       

        }}>Includes</button>
        <button type='button' onClick={()=>{
      console.log(tollywoodStars.indexOf("Chiranjeevi"))

       

        }}>IndexOf</button>
        <button type='button' onClick={()=>{
      console.log(tollywoodStars.lastIndexOf("Krishnam Raju"))

       

        }}>LastIndexOf</button>
        <button type='button' onClick={()=>{
      console.log(tollywoodStars.reverse())

       

        }}>Reverse</button>
         <button type='button' onClick={()=>{
           console.log(Array.isArray("abc"))
           console.log(Array.isArray(true))
           console.log(Array.isArray(123))
           console.log(Array.isArray([1,2,3,4,5]))

       

        }}>isArray</button>
         <button type='button' onClick={()=>{
           tollywoodStars.forEach((ele,i)=>{
            console.log(`${i}----->${ele}`)
           })

       

        }}>forEach</button>

    </div>
  );
}

export default App;

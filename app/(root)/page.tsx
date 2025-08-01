import HeaderBox from "@/components/HeaderBox";
import RightSidebar from "@/components/RightSidebar";
import TotalBalanceBox from "@/components/TotalBalanceBox";
const Home = () => {
  const loggedIn = { firstName: "Piv" ,lastName:"Nati" , email:'natanmuleta911@gmail.com' };
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
        <HeaderBox 
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || 'Guest'}
            subtext="Access and manage your account and transactions efficiently."
          />
        <TotalBalanceBox
         accounts={[]}
         totalBalance={1}
         totalCurrentBalance={1250.35}
        />  
        </header>
        RECENT TRANSACTION 
      </div>

      <RightSidebar 
      user={loggedIn}
      transactions={[]}
      banks={[0,1]}
      />
    </section>
  );
};

export default Home;

import testDrinkData from "./testDrinkData.json";
import testCouponData from "./testCouponData.json";
import DrinkCard from "./components/drinkCard";

function Page() {
  return (
    <main className="flex mx-auto w-full justify-center">
      <section className="w-1/3 shadow-md rounded-md mt-10 p-6 mr-8">
        <p className="text-2xl font-bold text-black mb-8">飲品</p>

        {testDrinkData.map((drink, index) => (
          <DrinkCard
            key={index}
            name={drink.name}
            price={drink.price}
            imageUrl={drink.imageUrl}
            description={drink.description}
          />
        ))}

        <p className="text-2xl font-bold text-black mb-8">優惠卷</p>
        {testCouponData.map((coupon, index) => (
          <div className="flex items-center justify-between w-full shadow-md rounded-md p-6">
            <img
              src="./coupon.png"
              alt="coupon"
              className="w-12 h-12 rotate-90"
            />
            <div className="text-black">
              <p className="font-bold">{coupon.name}</p>
              <p>到期日 {coupon.duedate}</p>
              <p>優惠卷代碼 {coupon.code}</p>
            </div>
          </div>
        ))}
      </section>
      <section className="w-1/3 shadow-md rounded-md mt-10 p-6">
        <p className="text-2xl font-bold text-black">新增飲品</p>
        <div className="label">
          <span className="label-text mt-4">飲品名字</span>
        </div>
        <input
          type="text"
          placeholder="林冠廷"
          className="bg-white p-2 border-2 rounded-md block w-full"
        />
        <div className="label">
          <span className="label-text mt-4">飲品圖片</span>
        </div>
        <input
          type="text"
          placeholder="url"
          className="bg-white p-2 border-2 rounded-md block w-full"
        />
        <div className="label">
          <span className="label-text mt-4">飲品價格</span>
        </div>
        <input
          type="text"
          placeholder="75"
          className="bg-white p-2 border-2 rounded-md block w-full"
        />
        <div className="label">
          <span className="label-text mt-4">飲品敘述</span>
        </div>
        <input
          type="text"
          placeholder="【L杯】總糖量59公克．總熱量366大卡【XL杯】總糖量75公克．總熱量455大卡∣咖啡因總含量：黃101-200mg/杯∣茶葉原產地：緬甸、台灣"
          className="bg-white p-2 border-2 rounded-md block w-full"
        />
        <button className="text-black rounded-md btn mt-4 bg-red-400 border-none">
          新增
        </button>
        <p className="text-2xl font-bold text-black mt-10">新增優惠卷</p>
        <div className="label">
          <span className="label-text mt-4">優惠卷代碼</span>
        </div>
        <input
          type="text"
          placeholder=""
          className="bg-white p-2 border-2 rounded-md block w-full"
        />
        <button className="text-black rounded-md btn mt-4 bg-red-400 border-none">
          新增
        </button>
      </section>
    </main>
  );
}

export default Page;

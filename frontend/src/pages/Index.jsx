import { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { BiLogoGmail } from "react-icons/bi";
import { FaFacebook } from "react-icons/fa";

const Index = () => {
	const [type, setType] = useState("");
	const [show, setShow] = useState(false);
	const [state, setState] = useState({
		name: "",
		email: "",
		password: "",
	});

	const inputHandle = (e) => {
		setState({
			...state,
			// dynamic key in object - without bracket it just literal key
			[e.target.name]: e.target.value,
		});
	};

	return (
		// Full body
		<div className="bg-[#18191b] min-h-screen w-full">
			{/* Pop up window background */}
			<div
				className={`w-screen ${
					show ? "visible opacity-100" : "invisible opacity-0"
				} transition-all duration-500 h-screen fixed bg-[#252627ad] flex justify-center items-center`}
			>
				{/* Pop up window actual content */}
				<div className="w-[350px] bg-[#323335] m-auto px-6 py-4 rounded-md relative">
					{/* Close window icon */}
					<div
						onClick={() => setShow(false)}
						className="absolute right-4 top-4 text-xl cursor-pointer text-white"
					>
						<RxCross1 />
					</div>
					{/* Heading */}
					<h2 className="text-white font-semibold mb-5">
						Login and Sign up in seconds
					</h2>
					{/* Sign in Form */}
					{type === "signin" && (
						// Sign in Form
						<form action="#">
							{/* Email */}
							<div className="flex flex-col gap-3 mb-3 text-white">
								<label htmlFor="email">Email</label>
								<input
									onChange={inputHandle}
									value={state.email}
									type="email"
									name="email"
									id="email"
									placeholder="email"
									className="px-3 py-2 rounded-md border outline-none border-[#5c5c5e] focus:border-purple-500 bg-transparent"
								/>
							</div>
							{/* Password */}
							<div className="flex flex-col gap-3 mb-3 text-white">
								<label htmlFor="password">Password</label>
								<input
									onChange={inputHandle}
									value={state.password}
									type="password"
									name="password"
									id="password"
									placeholder="password"
									className="px-3 py-2 rounded-md border outline-none border-[#5c5c5e] focus:border-purple-500 bg-transparent"
								/>
							</div>
							{/* Sign in button */}
							<div>
								<button className="px-3 py-2 rounded-md bg-purple-500 hover:bg-purple-600 text-white w-full outline-none">
									Sign In
								</button>
							</div>
							{/* "Or" divider */}
							<div className="flex py-4 justify-between items-center px-3">
								<div className="w-[45%] h-px bg-slate-500"></div>
								<div className="w-[9%] text-center flex pb-1 px-1 text-white">
									Or
								</div>
								<div className="w-[45%] h-px bg-slate-500"></div>
							</div>
							{/* Gmail login */}
							<div className="pb-4">
								<button className="px-3 flex justify-center items-center gap-2 py-2 rounded-md bg-red-500 hover:bg-red-600 text-white w-full outline-none">
									<span>
										<BiLogoGmail />
									</span>
									<span>Login with Gmail</span>
								</button>
							</div>
							{/* Fb login */}
							<div className="pb-4">
								<button className="px-3 flex justify-center items-center gap-2 py-2 rounded-md bg-blue-500 hover:bg-blue-600 text-white w-full outline-none">
									<span>
										<FaFacebook />
									</span>
									<span>Login with Facebook</span>
								</button>
							</div>
						</form>
					)}
					{/* Sign Up Form */}
					{type === "signup" && (
						// Sign in Form
						<form action="#">
							{/* Name */}
							<div className="flex flex-col gap-3 mb-3 text-white">
								<label htmlFor="name">Name</label>
								<input
									onChange={inputHandle}
									value={state.name}
									type="text"
									name="name"
									id="name"
									placeholder="name"
									className="px-3 py-2 rounded-md border outline-none border-[#5c5c5e] focus:border-purple-500 bg-transparent"
								/>
							</div>
							{/* Email */}
							<div className="flex flex-col gap-3 mb-3 text-white">
								<label htmlFor="email">Email</label>
								<input
									onChange={inputHandle}
									value={state.email}
									type="email"
									name="email"
									id="email"
									placeholder="email"
									className="px-3 py-2 rounded-md border outline-none border-[#5c5c5e] focus:border-purple-500 bg-transparent"
								/>
							</div>
							{/* Password */}
							<div className="flex flex-col gap-3 mb-3 text-white">
								<label htmlFor="password">Password</label>
								<input
									onChange={inputHandle}
									value={state.password}
									type="password"
									name="password"
									id="password"
									placeholder="password"
									className="px-3 py-2 rounded-md border outline-none border-[#5c5c5e] focus:border-purple-500 bg-transparent"
								/>
							</div>
							{/* Sign in button */}
							<div>
								<button className="px-3 py-2 rounded-md bg-purple-500 hover:bg-purple-600 text-white w-full outline-none">
									Sign Up
								</button>
							</div>
							{/* "Or" divider */}
							<div className="flex py-4 justify-between items-center px-3">
								<div className="w-[45%] h-px bg-slate-500"></div>
								<div className="w-[9%] text-center flex pb-1 px-1 text-white">
									Or
								</div>
								<div className="w-[45%] h-px bg-slate-500"></div>
							</div>
							{/* Gmail login */}
							<div className="pb-4">
								<button className="px-3 flex justify-center items-center gap-2 py-2 rounded-md bg-red-500 hover:bg-red-600 text-white w-full outline-none">
									<span>
										<BiLogoGmail />
									</span>
									<span>Login with Gmail</span>
								</button>
							</div>
							{/* Fb login */}
							<div className="pb-4">
								<button className="px-3 flex justify-center items-center gap-2 py-2 rounded-md bg-blue-500 hover:bg-blue-600 text-white w-full outline-none">
									<span>
										<FaFacebook />
									</span>
									<span>Login with Facebook</span>
								</button>
							</div>
						</form>
					)}
				</div>
			</div>
			{/* Header */}
			<div className="bg-[#212223] shadow-md">
				<div className="w-[93%] m-auto py-3">
					<div className="flex justify-between items-center">
						{/* Logo left */}
						<div className="flex items-center w-20 h-12">
							{/* Canva logo */}
							<img
								className="w-full h-full"
								src="https://static.canva.com/web/images/8439b51bb7a19f6e65ce1064bc37c197.svg"
								alt="canva logo"
							/>
							<span className="text-green-500 text-3xl font-bold block relative -translate-y-1">
								Clone
							</span>
						</div>

						{/* Logo Right */}
						<div className="flex gap-4">
							{/* Sign In Button */}
							<button
								onClick={() => {
									setType("signin");
									setShow(true);
								}}
								className="py-2 w-20 text-center bg-teal-700 text-white transition-all hover:bg-teal-500 rounded-[5px] font-medium cursor-pointer"
							>
								Sign In
							</button>
							{/* Sign up Button */}
							<button
								onClick={() => {
									setType("signup");
									setShow(true);
								}}
								className="py-2 w-20 text-center bg-purple-700 text-white transition-all hover:bg-purple-500 rounded-[5px] font-medium cursor-pointer"
							>
								Sign Up
							</button>
						</div>
					</div>
				</div>
			</div>

			{/* Body text */}
			<div className="w-full h-full justify-center items-center p-4">
				<div className="py-[170px] flex justify-center items-center flex-col gap-6">
					{/* Text heading */}
					<h2 className="text-white text-5xl font-bold">
						What you will design today?
					</h2>
					{/* Elaboration */}
					<span className="text-white text-2xl font-medium">
						Canva-clone makes it easy to create and share professional designs.
					</span>
					{/* Sign up button */}
					<button onClick={()=>{
						setShow(true)
						setType('signup')
					}} className="py-2 w-[200px] text-center bg-purple-700 text-white transition-all hover:bg-purple-500 rounded-[5px] font-medium cursor-pointer">
						Sign Up for Free
					</button>
				</div>
			</div>
		</div>
	);
};

export default Index;

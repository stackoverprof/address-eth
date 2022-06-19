import React, { useState } from 'react';
import ADDRESS from 'address.constants';
import MainLayout from '@components/_layouts/MainLayout';
import QRCode from 'react-qr-code';
import { FiCopy } from 'react-icons/fi';
import { NextPage } from 'next';

const Index: NextPage = () => {
	const [isCopied, setIsCopied] = useState(false);

	const handleCopy = () => {
		navigator.clipboard.writeText(ADDRESS);
		setIsCopied(true);
	};

	return (
		<MainLayout title="Home" className="flex-bc col">
			<div className="flex-cc col flex-1 h-full">
				<QRCode
					value={'ethereum:' + ADDRESS}
					level="L"
					bgColor="#150c25"
					fgColor="#FFFFFF"
				/>
				<h1 className="z-10 mt-6 mb-6 text-4xl font-bold text-center">
					<span className="text-purple-600">eth</span>
					<span className="opacity-40">.angkasa.one</span>
				</h1>
				<p className="z-10 px-8 mb-2 max-w-sm text-center truncate overflow-ellipsis">
					{ADDRESS}
				</p>
				<button
					onClick={handleCopy}
					className="flex-cc px-2.5 text-lg hover:bg-opacity-50 py-1 font-medium bg-white bg-opacity-20 rounded"
				>
					{isCopied ? (
						<p className="flex-cc text-gray-400">Copied!</p>
					) : (
						<p className="flex-cc">
							<FiCopy className="mr-2" />
							Copy
						</p>
					)}
				</button>
			</div>

			<div
				className="flex-cc w-full"
				style={{
					backgroundImage: 'url(/stripes.svg)',
					backgroundPosition: 'center',
					backgroundSize: 'cover',
					paddingBottom: 'env(safe-area-inset-bottom)',
				}}
			>
				<p className="flex-cc my-8 text-lg">R. Bintang Bagus Putra Angkasa</p>
			</div>
		</MainLayout>
	);
};

export default Index;

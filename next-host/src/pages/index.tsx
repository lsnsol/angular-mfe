import { lazy, Suspense } from 'react';
import { loadRemote } from '@module-federation/runtime';

const CheckoutPage = lazy(() => loadRemote('nextmnh/Home'));

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Checkout = (props: any) => {
  return (
    <Suspense fallback={'loading'}>
      <CheckoutPage {...props} />
    </Suspense>
  );
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
Checkout.getInitialProps = async (ctx: any) => {
  const res = await loadRemote('nextmnh/Home');

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const mod = res as { default: { getInitialProps: (ctx: any) => any } };

  return mod.default.getInitialProps(ctx);
};

export default Checkout;
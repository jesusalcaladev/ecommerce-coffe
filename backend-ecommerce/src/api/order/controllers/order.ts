/**
 * order controller
 */
import stripe from 'stripe'
import { factories } from '@strapi/strapi'

const stripeConfig = new stripe(process.env.STRIPE_KEY)

export default factories.createCoreController(
  'api::order.order',
  ({ strapi }) => ({
    async create(ctx) {
      const { products } = ctx.request.body
      try {
        const lineItems = await Promise.all(
          products.map(async (product) => {
            return {
              price_data: {
                currency: 'usd',
                product_data: {
                  name: product.productName,
                },
                unit_amount: Math.round(product.price * 100),
              },
              quantity: 1,
            }
          })
        )

        const session = await stripeConfig.checkout.sessions.create({
          shipping_address_collection: {
            allowed_countries: ['US', 'VE', 'ES'],
          },
          payment_method_types: ['card'],
          mode: 'payment',
          success_url: process.env.CLIENT_URL + '/success',
          cancel_url: process.env.CLIENT_URL + '/sucessError',
          line_items: lineItems,
        })

        await strapi
          .service('api::order.order')
          .create({ data: { products, stripeId: session.id } })

        return { stripeSession: session }
      } catch (error) {
        ctx.response.status = 500
        console.log(error)
        return { error }
      }
    },
  })
)

import { sortBy, order as orderConstant } from 'src/constants/product'
import { ProductListConfig } from 'src/types/product.type'
import classNames from 'classnames'
import { Link, createSearchParams, useNavigate } from 'react-router-dom'
import path from 'src/constants/path'
import omit from 'lodash/omit'
import { QueryConfig } from 'src/hooks/useQueryConfig'

interface Props {
  queryConfig: QueryConfig
  pageSize: number
}

export default function SortProductList({ queryConfig, pageSize }: Props) {
  const page = Number(queryConfig.page)
  const { sort_by = sortBy.createdAt, order } = queryConfig
  const navigate = useNavigate()
  const isActiveSortBy = (sortByValue: Exclude<ProductListConfig['sort_by'], undefined>) => {
    return sort_by === sortByValue
  }

  const handleSort = (sortByValue: Exclude<ProductListConfig['sort_by'], undefined>) => {
    navigate({
      pathname: path.home,
      search: createSearchParams(
        omit(
          {
            ...queryConfig,
            sort_by: sortByValue
          },
          ['order']
        )
      ).toString()
    })
  }

  const handlePriceOrder = (orderValue: Exclude<ProductListConfig['order'], undefined>) => {
    navigate({
      pathname: path.home,
      search: createSearchParams({
        ...queryConfig,
        sort_by: sortBy.price,
        order: orderValue
      }).toString()
    })
  }

  return (
    <div className='bg-gray-300/4 py-4 px-3'>
      <div className='flex flex-wrap items-center justify-between gap-2'>
        <div className='flex flex-wrap gap-2 items-center'>
          <div>Sắp xếp theo</div>
          <button
            className={classNames('h-8 px-4 capitalize  text-center', {
              'bg-orange text-white text-sm hover:bg-orange/80': isActiveSortBy(sortBy.view),
              'bg-white text-black hover:bg-slate-100': !isActiveSortBy(sortBy.view)
            })}
            onClick={() => handleSort(sortBy.view)}
          >
            Phổ biến
          </button>
          <button
            className={classNames('h-8 px-4 capitalize  text-center', {
              'bg-orange text-white text-sm hover:bg-orange/80': isActiveSortBy(sortBy.createdAt),
              'bg-white text-black hover:bg-slate-100': !isActiveSortBy(sortBy.createdAt)
            })}
            onClick={() => handleSort(sortBy.createdAt)}
          >
            Mới nhất
          </button>
          <button
            className={classNames('h-8 px-4 capitalize  text-center', {
              'bg-orange text-white text-sm hover:bg-orange/80': isActiveSortBy(sortBy.sold),
              'bg-white text-black hover:bg-slate-100': !isActiveSortBy(sortBy.sold)
            })}
            onClick={() => handleSort(sortBy.sold)}
          >
            Bán chạy
          </button>
          <select
            className={classNames('h-8 px-4 capitalize outline-none text-sm text-left', {
              'bg-orange text-white text-sm hover:bg-orange/80': isActiveSortBy(sortBy.price),
              'bg-white text-black hover:bg-slate-100': !isActiveSortBy(sortBy.price)
            })}
            value={order || ''}
            onChange={(e) => handlePriceOrder(e.target.value as Exclude<ProductListConfig['order'], undefined>)}
          >
            <option value='' disabled className='bg-white text-black'>
              Giá
            </option>
            <option value={orderConstant.asc} className='bg-white text-black'>
              Giá: Thấp đến Cao
            </option>
            <option value={orderConstant.desc} className='bg-white text-black'>
              Giá: Cao đến Thấp
            </option>
          </select>
        </div>
        <div className='flex items-center'>
          <div>
            <span className='text-orange'>{page}</span>
            <span>/{pageSize}</span>
          </div>
          <div className='ml-2 flex'>
            {page === 1 ? (
              <span className='flex justify-center items-center w-9 px-3 h-8 rounded-tl-sm rounded-bl-sm bg-white/60 hover:bg-slate-100 cursor-not-allowed shadow-sm'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-3 h-3'
                >
                  <path strokeLinecap='round' strokeLinejoin='round' d='M15.75 19.5L8.25 12l7.5-7.5' />
                </svg>
              </span>
            ) : (
              <Link
                to={{
                  pathname: path.home,
                  search: createSearchParams({
                    ...queryConfig,
                    page: (page - 1).toString()
                  }).toString()
                }}
                className='flex justify-center items-center w-9 px-3 h-8 rounded-tl-sm rounded-bl-sm bg-white hover:bg-slate-100 cursor-pointer shadow-sm'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-3 h-3'
                >
                  <path strokeLinecap='round' strokeLinejoin='round' d='M15.75 19.5L8.25 12l7.5-7.5' />
                </svg>
              </Link>
            )}
            {page === pageSize ? (
              <span className='flex justify-center items-center w-9 px-3 h-8 rounded-tl-sm rounded-bl-sm bg-white/60 hover:bg-slate-100 cursor-not-allowed shadow-sm'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-3 h-3'
                >
                  <path strokeLinecap='round' strokeLinejoin='round' d='M8.25 4.5l7.5 7.5-7.5 7.5' />
                </svg>
              </span>
            ) : (
              <Link
                to={{
                  pathname: path.home,
                  search: createSearchParams({
                    ...queryConfig,
                    page: (page + 1).toString()
                  }).toString()
                }}
                className='flex justify-center items-center w-9 px-3 h-8 rounded-tl-sm rounded-bl-sm bg-white hover:bg-slate-100 cursor-pointer shadow-sm'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-3 h-3'
                >
                  <path strokeLinecap='round' strokeLinejoin='round' d='M8.25 4.5l7.5 7.5-7.5 7.5' />
                </svg>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
